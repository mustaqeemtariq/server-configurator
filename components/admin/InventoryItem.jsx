import { useEffect, useRef, useState } from "react";
import InventoryCategoryTable from "./InventoryCategoryTable";
import ItemModal from "./Modal";
import Button from "@components/Button";
import ItemForm from "./ItemForm";
import { jsonParseFormData } from "@utils/admin/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InventoryItem = ({
  title,
  primaryKeyName,
  tableHeaders,
  formFields,
  jsonFields,
  getAll,
  create,
  edit,
  destroy,
}) => {
  const isFirstRenderRef = useRef(true);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    const response = await getAll();
    if (title === "Orders") {
      setItems(response.data.reverse());
    }
    setItems(response.data);
  };

  useEffect(() => {
    if (isFirstRenderRef.current || selectedItem === null) {
      fetchData();
    }
  }, [selectedItem]);

  const createItem = async (data) => {
    const response = await create(data);
    if (response.status === 201) {
      setSelectedItem(null);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  const editItem = async (id, data) => {
    const response = await edit(id, data);
    if (response.status === 200) {
      setSelectedItem(null);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  const deleteItem = async (id) => {
    const response = await destroy(id);
    if (response.status === 200) {
      setSelectedItem(null);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  const [sortOption, setSortOption] = useState(null);

  useEffect(() => {
    if (sortOption) {
      let check = parseFloat(items[0][sortOption]);
      if (typeof check === "number" && check == items[0][sortOption]) {
        let sortedItems = [...items].sort(
          (a, b) => parseFloat(a[sortOption]) - parseFloat(b[sortOption])
        );
        setItems(sortedItems);
      } else if (typeof items[0][sortOption] === "string") {
        let sortedItems = [...items].sort((a, b) =>
          a[sortOption].localeCompare(b[sortOption])
        );
        setItems(sortedItems);
      }
    } else {
      fetchData();
    }
  }, [sortOption]);

  return (
    <div className="px-[72px] py-[48px]">
      <div className="flex flex-row gap-x-4 justify-between">
        <h2 className="text-5xl">{title}</h2>
        <div className="flex gap-x-4">
          <select
            onChange={(event) => {
              setSortOption(event.target.value);
            }}
            className="py-3 rounded-md"
          >
            <option value="">Choose an option to sort</option>
            {tableHeaders.map((header) => (
              <option value={header.name}>{header.label}</option>
            ))}
          </select>
          <Button
            variant="primary"
            size="lg"
            type="button"
            className="ml-auto"
            onClick={() => setSelectedItem({})}
          >
            Add
          </Button>
        </div>
      </div>
      {items && (
        <div className="my-[48px]">
          <InventoryCategoryTable
            headers={tableHeaders}
            data={items}
            onRowClick={(row) => setSelectedItem(row)}
          />
        </div>
      )}

      <ItemModal
        isOpen={!!selectedItem}
        onModalClose={() => setSelectedItem(null)}
      >
        <ItemForm
          primaryKeyName={primaryKeyName}
          data={jsonParseFormData(selectedItem, jsonFields)}
          fields={formFields}
          jsonFields={jsonFields}
          createItem={createItem}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      </ItemModal>
      <ToastContainer
        position="top-right"
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        closeButton={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default InventoryItem;
