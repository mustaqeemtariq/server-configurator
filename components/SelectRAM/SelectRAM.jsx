import { useDispatch, useSelector } from "react-redux";

import { toggleECCRAMsOnly, selectRAM } from "@store/slices/configuratorSlice";
import ToggleSwitch from "../ToggleSwitch";
import RAMItem from "./RAMItem";
import { useEffect, useState } from "react";

const SelectRAM = () => {
  const {
    filteredRAMs,
    ram: { selectedRAM },
  } = useSelector((state) => state.configurator);

  const dispatch = useDispatch();
  // const sortedRams = [...filteredRAMs].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [toggleValue, setToggleValue] = useState(false)

  useEffect(() => {
    const sortedRams = [...filteredRAMs].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    setData(sortedRams)
    setFilteredData(sortedRams)
  }, [filteredRAMs])

  useEffect(() => {
    toggleECCRam(toggleValue)
  }, [data])

  const toggleECCRam = (value) => {
    setToggleValue(value)
    if (value) {
      const updatedData = [...data].filter(r => r.is_ECC)
      setFilteredData(updatedData)
    }
    else {
      const updatedData = [...data].filter(r => !r.is_ECC)
      setFilteredData(updatedData)
    }
  };

  const toggleFilter = (value) => {
    if (value) {
      const sortedRams = [...filteredRAMs].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      return setData(sortedRams)
    }
    setData(filteredRAMs)
  }

  return (
    <div className="rounded-lg shadow-sm w-full max-h-96 overflow-y-auto">
      <div className="bg-white z-50 sticky top-0 flex justify-between p-4">
        <h3 className="font-bold text-lg">Select RAM</h3>
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-lg">ECC</h3>
          <ToggleSwitch value={false} onToggle={toggleECCRam} />
        </div>
      </div>
      <div className="hidden p-4 items-center gap-2">
          <h3 className="font-bold text-lg">Sort by price</h3>
          <ToggleSwitch value={true} onToggle={toggleFilter} />
      </div>
      <div className="flex flex-col gap-2 p-4">
        {filteredData.map((item) => (
          <RAMItem
            onClick={() => dispatch(selectRAM(item))}
            key={item.ram_id}
            data={item}
            isSelected={selectedRAM && selectedRAM.ram_id == item.ram_id}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectRAM;
