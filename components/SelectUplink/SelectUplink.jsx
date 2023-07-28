import Uplink from "./UplinkItem";
import { useSelector } from "react-redux";

const SelectUplink = () => {
  const { allUplinkInventories } = useSelector((state) => state.configurator);

  return (
    <div className="bg-white overflow-auto rounded-lg border border-sky-400 shadow-sm p-4 mb-13">
      <div>
        <h3 className="font-bold text-lg">Select Uplink</h3>
        <div className="pt-4 flex flex-col gap-4 gap-x-8">
          {allUplinkInventories.map((item) => (
            <Uplink key={item.uplink_id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectUplink;
