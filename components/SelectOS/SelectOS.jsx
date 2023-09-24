import { useSelector } from "react-redux";

import OSItem from "./OSItem";

const SelectOS = () => {
  const { allOS } = useSelector((state) => state.configurator);

  return (
    <div className="max-h-[40em] overflow-y-auto scroll-mt-6 bg-white rounded-lg border border-sky-400 shadow-sm">
      <h3 className="sticky top-0 bg-white font-bold text-lg p-2">Select OS</h3>
      <div className="p-2 pt-4 grid grid-cols-2 lg:grid-cols-9 gap-x-2 gap-y-5">
        {allOS.map((item) => (
          <OSItem key={item.os_id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SelectOS;
