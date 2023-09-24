import { useDispatch, useSelector } from "react-redux";
import { selectCPU, selectCPUCompany } from "@store/slices/configuratorSlice";
import CPUCompanyItem from "./CPUCompanyItem";
import CPUItem from "./CPUItem";
import { useEffect, useState } from "react";
import ToggleSwitch from "@components/ToggleSwitch";

const CPU_COMPANIES = {
  RYZEN: {
    name: "Ryzen",
    imageSrc: "/assets/images/ryzen.png",
  },
  INTEL: {
    name: "Intel",
    imageSrc: "/assets/images/intel.png",
  },
  EPYC: {
    name: "EPYC",
    imageSrc: "/assets/images/epyc.webp",
  },
};

const SelectCPU = () => {
  let {
    allCPUs,
    filteredCPUs,
    cpu: { selectedCPUCompany, selectedCPU },
  } = useSelector((state) => state.configurator);

  const dispatch = useDispatch();

  const [allData, setAllData] = useState([]);
  const [filterData, setFilteredData] = useState([]);
  const [toggleValue, setToggleValue] = useState(true);

  useEffect(() => {
    allCPUs = allCPUs.filter((a) => a.is_enabled);
    filteredCPUs = filteredCPUs.filter((f) => f.is_enabled);

    if (allCPUs.length > 0) {
      toggleFilter();
    }
  }, [allCPUs, filteredCPUs, toggleValue]);

  const handleCPUCompanySelection = (company) => {
    dispatch(selectCPUCompany(company));
  };

  const handleLogoItemButtonClick = (id) => {
    dispatch(selectCPU(id));
  };

  const toggleFilter = () => {
    if (toggleValue) {
      const sortedCPUs = [...allCPUs].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      const filteredSortedCPUs = [...filteredCPUs].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      setAllData(sortedCPUs);
      setFilteredData(filteredSortedCPUs);
    } else {
      setAllData(allCPUs);
      setFilteredData(filteredCPUs);
    }
  };

  return (
    <section>
      <div className="mx-auto max-h-[40em] overflow-y-auto bg-gray-50 border border-sky-400 rounded-lg">
        <div className="flex items-center p-4 z-50 bg-white sticky top-0">
          <h3 className="font-bold text-xl">Select CPU</h3>
          <div className="p-1 flex ml-auto items-center gap-2">
            <CPUCompanyItem
              src={CPU_COMPANIES.RYZEN.imageSrc}
              id={CPU_COMPANIES.RYZEN.name}
              onClick={handleCPUCompanySelection}
              isSelected={CPU_COMPANIES.RYZEN.name === selectedCPUCompany}
            />
            <CPUCompanyItem
              src={CPU_COMPANIES.EPYC.imageSrc}
              id={CPU_COMPANIES.EPYC.name}
              onClick={handleCPUCompanySelection}
              isSelected={CPU_COMPANIES.EPYC.name === selectedCPUCompany}
            />
            <CPUCompanyItem
              src={CPU_COMPANIES.INTEL.imageSrc}
              id={CPU_COMPANIES.INTEL.name}
              onClick={handleCPUCompanySelection}
              isSelected={CPU_COMPANIES.INTEL.name === selectedCPUCompany}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 p-4">
          <h3 className="font-bold text-lg">Sort by price</h3>
          <ToggleSwitch value={true} onToggle={(value) => setToggleValue(value)} />
        </div>
        <div className="mt-4 flex flex-col gap-2 px-2">
          {(selectedCPUCompany ? filterData : allData).map((item) => (
            <CPUItem
              key={item.cpu_id}
              data={item}
              onClick={handleLogoItemButtonClick}
              isSelected={selectedCPU && selectedCPU.cpu_id === item.cpu_id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectCPU;
