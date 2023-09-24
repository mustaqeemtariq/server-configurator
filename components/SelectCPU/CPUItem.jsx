import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

const CPUItem = ({ data, onClick, isSelected }) => {
  const cpuName = `${data.company} ${data.cpu_name}`;
  const priceDetails = ` ${data.price} € ${data.payment_frequency}`;
  const coreDetails = `${data.num_cores} Cores(${data.num_threads} Threads)`;
  const clockDetails = `${data.clock_speed} GHz(${data.turbo_boost_freq} GHz Turbo)`;

  return (
    <button
      className={`col-span-6 flex items-center gap-4 bg-gray-50 rounded-lg px-4 py-4 border  border-sky-400 hover:border-sky-600 hover:bg-sky-100 cursor-pointer ${
        isSelected ? "bg-sky-100 border-sky-400" : ""
      }`}
      onClick={() => onClick(data)}
    >
      <img
        src={data.imagesPath || ""}
        width={55}
        height={55}
        className="object-contain"
        alt="cpu image"
      />
      <div className="flex flex-1 items-center justify-between">
        <div>
          <h3 className="block text-start leading-0 font-medium">{cpuName}</h3>
          <span className="block text-start text-gray-500 text-xs leading-0">
            {priceDetails}
          </span>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <span className="flex items-center gap-1 text-xs text-gray-900 font-semibold">
            <FontAwesomeIcon
              icon={faMicrochip}
              width={24}
              height={24}
              className="fill-current w-4 h-4 text-gray-700"
            />
            {coreDetails}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-900 font-semibold">
            <FontAwesomeIcon
              icon={faTachometerAlt}
              width={24}
              height={24}
              className="fill-current w-4 h-4 text-gray-700"
            />
            {clockDetails}
          </span>
          <div className="mt-2 flex items-center gap-2 justify-end flex-wrap">
            {data.units_left === 1 && (
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-600/20 text-yellow-600">
                Only 1 left
              </span>
            )}
            {data.special_offer_active === true && (
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-600/20 text-green-600">
                Special Offer
              </span>
            )}
            {data.units_left === 0 && (
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-600/20 text-red-600">
                Sold Out
              </span>
            )}
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-600/20 text-gray-600">{`${data.delivery_time} Day(s) delivery time`}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default CPUItem;
