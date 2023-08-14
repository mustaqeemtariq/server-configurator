import { createCPU, createCheckout, createDisk, createGPU, createOS, createRAM, createUplink } from "@api/admin";
import moment from "moment";
import { useEffect, useState } from "react";

const HeaderRow = ({ headers }) => {
  return (
    <thead>
      <tr className="flex bg-gray-300">
        {headers.map((header) => (
          <th
            key={header.label}
            className={`text-center w-[${
              header.size * 100
            }px] px-[24px] py-[16px]`}
          >
            {header.label}
          </th>
        ))}
        {headers[0].name !== "order_id" && headers[0].name !== "relation_id" && <th className={`text-center px-[24px] py-[16px]`}>Copy</th>}
      </tr>
    </thead>
  );
};

const Row = ({ item, headers, onClick, index, setItems, maxId, setMaxId }) => {
  const handleClick = () => {
    onClick(item);
  };

  const handleCopy = (data) => {
    setItems(prev => {
      const updated = [...prev]
      const indexToUpdate = updated.findIndex(item => item[headers[0].name] === data[headers[0].name])

      if (indexToUpdate !== -1) {
        updated.splice(indexToUpdate + 1, 0, { ...data, [headers[0].name]: maxId + 1 })
      } else {
        updated.push({ ...data, [headers[0].name]: maxId + 1 })
      }
    
      return updated
    })
    const check = headers[0].name
    setMaxId(prev => prev + 1)
    switch (check) {
      case "cpu_id":
        createCPU({...data, [headers[0].name]: maxId + 1 })
        break;
      case "gpu_id":
        createGPU({...data, [headers[0].name]: maxId + 1 })
        break;
      case "disk_id":
        createDisk({...data, [headers[0].name]: maxId + 1 })
        break;
      case "ram_id":
        createRAM({...data, [headers[0].name]: maxId + 1 })
        break;
      case "uplink_id":
        createUplink({...data, [headers[0].name]: maxId + 1 })
        break;
      case "os_id": 
        createOS({...data, [headers[0].name]: maxId + 1 })
        break;
      default:
        break;
    }
  }

  return (
    <tr
      onClick={handleClick}
      className={`flex cursor-pointer hover:bg-gray-200 ${
        index % 2 ? "bg-gray-100" : ""
      }`}
    >
      {headers.map((header) => (
          <td
            key={header.name}
            className={`text-center w-[${
              header.size * 100
            }px] px-[24px] py-[16px]`}
          >
            {header.name === "cpu_inventory" ? item.cpu_inventory.cpu_name : header.name === "disk_inventory" ? item.disk_inventory.diskType : header.name === "modified_timestamp" ? moment(item[header.name]).format("MMM DD, YYYY h:mm A") :  header.name === "created_timestamp" ? moment(item[header.name]).format("MMM DD, YYYY h:mm A") : item[header.name]?.toString()}
          </td>
      ))}
        {headers[0].name !== "order_id" && headers[0].name !== "relation_id" && <td onClick={(event) => {
          event.stopPropagation()
          handleCopy(item)
          }} 
          className={`text-center px-[30px] py-[16px]`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
              />
            </svg>
          </td>}
    </tr>
  );
};

const InventoryCategoryTable = ({ data, headers, onRowClick }) => {
  const [items, setItems] = useState(data)
  const [maxId, setMaxId] = useState(headers[0].name === "order_id" ? data[0]?.[headers[0].name] : data[data.length-1]?.[headers[0].name])
  useEffect(() => {
    setItems(data);
    setMaxId(headers[0].name === "order_id" ? data[0]?.[headers[0].name] : data[data.length-1]?.[headers[0].name])
  }, [data]);
  return (
    <table className="table-auto w-[100%] border border-gray-300">
      <HeaderRow headers={headers} />

      <tbody>
        {items.map((item, index) => (
          <Row
            item={item}
            headers={headers}
            index={index}
            onClick={onRowClick}
            setItems={setItems}
            maxId={maxId}
            setMaxId={setMaxId}
          />
        ))}
      </tbody>
    </table>
  );
};

export default InventoryCategoryTable;
