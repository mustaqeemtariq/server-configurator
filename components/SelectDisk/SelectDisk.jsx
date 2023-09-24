import { useDispatch, useSelector } from "react-redux";

import { togglePremiumDisksOnly } from "@store/slices/configuratorSlice";
import ToggleSwitch from "@components/ToggleSwitch";
import DiskItem from "./DiskItem";
import DiskSelectionShowcase from "./DiskSelectionShowcase";
import { getTotalDisksCount } from "./utils";
import { useEffect, useState } from "react";
import { getAllRelations } from "@api/public";

const SelectDisk = () => {
  let {
    filteredDisks,
    cpu,
    disk: { selectedSSD, selectedHDD },
  } = useSelector((state) => state.configurator);

  const [data, setData] = useState([]);
  const [relations, setRelations] = useState([]);
  const [filteredDisk, setFilteredDisk] = useState([])
  const [unsortedDisk, setUnsortedDisk] = useState([])
  const [toggleValue, setToggleValue] = useState(false)

  useEffect(() => {
    if (relations.length === 0) {
      getAllRelations().then((res) => setRelations(res.data));
    }
  }, []);

  useEffect(() => {
    if (relations.length > 0) {
      const filteredRelation = relations.filter(
        (c) => c.cpu_id === cpu.selectedCPU.cpu_id
      );
      setData(filteredRelation);
    }
  }, [relations]);

  const togglePremiumDisks = (isOn) => {
    if (!isOn) {
      let filteredDisks = [...data].filter((val) =>
        !val.disk_inventory.is_premium
      );
      setUnsortedDisk(filteredDisks)
      setFilteredDisk(filteredDisks);
      console.log("FILTER", filteredDisk);
    } else {
      let filteredDisks = [...data].filter((val) =>
        val.disk_inventory.is_premium
      );

      console.log("FILTER", data);
      setUnsortedDisk(filteredDisks)
      setFilteredDisk(filteredDisks);
    }
  }
  useEffect(() => {
    togglePremiumDisks(false);
  }, [data]);

  useEffect(() => {
    toggleFilter(toggleValue)
  }, [toggleValue]);

  const toggleFilter = () => {
    if (toggleValue) {
      const sortedDisks = [...filteredDisk].sort(
        (a, b) => parseFloat(a.disk_inventory.price) - parseFloat(b.disk_inventory.price)
      );
      setFilteredDisk(sortedDisks);
    }
    else {
      setFilteredDisk(unsortedDisk)
    }
  };

  const selectedHDDCount = getTotalDisksCount(selectedHDD);
  const selectedSSDCount = getTotalDisksCount(selectedSSD);

  const hddLimit = cpu?.selectedCPU?.hdd_disk_limit;
  const ssdLimit = cpu?.selectedCPU?.ssd_disk_limit;


  return (
    <section>
      <div className="max-h-[40rem] overflow-y-auto mx-auto bg-gray-50 border border-sky-400 shadow-lg rounded-lg">
        <div className="sticky top-0 z-40 bg-white p-4 flex justify-between items-center gap-2 text-lg font-bold">
          <h3>Select Disk</h3>
          <div className="flex items-center gap-x-2">
            <h3 className="font-bold text-lg">Datacenter</h3>
            <ToggleSwitch onToggle={togglePremiumDisks} />
          </div>
        </div>
        <div className="p-4 flex items-center gap-2">
          <h3 className="font-bold text-lg">Sort by price</h3>
          <ToggleSwitch value={false} onToggle={(value) => setToggleValue(value)} />
        </div>
        <div className="p-4">
          <div className="mt-4 grid grid-cols-2 flex-col gap-4 gap-x-8">
            {filteredDisk.length > 0 && filteredDisk.map((item, index) => (
              <DiskItem
                key={`${index} - ${item.ram_id}`}
                data={item.disk_inventory}
                limit={item.disk_inventory.diskType === "SATA" ? hddLimit : ssdLimit}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4 mt-3 p-4">
            <DiskSelectionShowcase
              title={`SATA(${selectedHDDCount}/${hddLimit})`}
              src="/assets/images/hdd.png"
              isHDD={true}
              limit={hddLimit}
            />
            <DiskSelectionShowcase
              title={`M.2(${selectedSSDCount}/${ssdLimit})`}
              src="/assets/images/nvme.png"
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
