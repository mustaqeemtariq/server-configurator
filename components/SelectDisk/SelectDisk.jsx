import { useDispatch, useSelector } from "react-redux";

import { togglePremiumDisksOnly } from "@store/slices/configuratorSlice";
import ToggleSwitch from "@components/ToggleSwitch";
import DiskItem from "./DiskItem";
import DiskSelectionShowcase from "./DiskSelectionShowcase";
import { getTotalDisksCount } from "./utils";
import { useEffect, useState } from "react";

const SelectDisk = () => {
  let {
    filteredDisks,
    cpu,
    disk: { selectedSSD, selectedHDD },
  } = useSelector((state) => state.configurator);

  const [data, setData] = useState([])
 
  const togglePremiumDisks = (isOn) => {
    if (!isOn) {
      filteredDisks = filteredDisks.filter(val => !val.is_premium)
      setData(filteredDisks)
    }
    else {
      filteredDisks = filteredDisks.filter(val => val.is_premium)
      setData(filteredDisks)
    }
  };

  useEffect(()=> {
    togglePremiumDisks()
  }, [])

  useEffect(() => {
    const sortedDisks =  [...filteredDisks].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    setData(sortedDisks)
  }, [filteredDisks])

  const toggleFilter = (value) => {
    if (value) {
      const sortedDisks =  [...filteredDisks].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      return setData(sortedDisks)
    }
    setData(filteredDisks)
  }

  useEffect(() => {
    const sortedDisks =  [...filteredDisks].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    setData(sortedDisks)
  }, [filteredDisks])

  const selectedHDDCount = getTotalDisksCount(selectedHDD);
  const selectedSSDCount = getTotalDisksCount(selectedSSD);

  const hddLimit = cpu?.selectedCPU?.hdd_disk_limit;
  const ssdLimit = cpu?.selectedCPU?.ssd_disk_limit;

  return (
    <section>
      <div className="max-h-96 overflow-y-auto mx-auto bg-gray-50 border border-sky-400 shadow-lg rounded-lg">
        <div className="sticky top-0 z-40 bg-white p-4 flex justify-between items-center gap-2 text-lg font-bold">
          <h3>Select Disk</h3>
          <div className="flex items-center gap-x-2">
            <h3 className="font-bold text-lg">Datacenter Premium Hardware</h3>
            <ToggleSwitch onToggle={togglePremiumDisks} />
          </div>
        </div>
        <div className="p-4 flex items-center gap-2">
          <h3 className="font-bold text-lg">Sort by price</h3>
          <ToggleSwitch value={true} onToggle={toggleFilter} />
      </div>
        <div className="p-4">
          <div className="mt-4 grid grid-cols-2 flex-col gap-4 gap-x-8">
            {data.map((item) => (
              <DiskItem
                key={item.ram_id}
                data={item}
                limit={item.diskType === "SATA" ? hddLimit : ssdLimit}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4 mt-3 p-4">
            <DiskSelectionShowcase
              title={`2,5"(${selectedHDDCount}/${hddLimit})`}
              src="/assets/images/hdd.png"
              isHDD={true}
              limit={hddLimit}
            />
            <DiskSelectionShowcase
              title={`M.2(${selectedSSDCount}/${ssdLimit})`}
              src="/assets/images/ssd.png"
              isHDD={false}
              limit={ssdLimit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectDisk;