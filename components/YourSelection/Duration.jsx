import { contractDuration } from "../../utils/DropDowndata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const ContractDuration = ({ isVisible, onClick }) => {
  const handleClick = () => {
    onClick(!isVisible);
  };
  return (
    <div className="mt-2">
      <h3 className="font-bold text-lg text-gray-500">
        {contractDuration.title}
      </h3>
      <div className="relative z-1 w-full">
        <button
          className="relative bg-gray-50 border border-gray-300 px-4 py-3 rounded-md text-gray-700 text-sm flex items-center z-0 w-full gap-2"
          onClick={handleClick}
        >
          {contractDuration.initialHeading}
          <FontAwesomeIcon
            icon={faChevronCircleDown}
            width={24}
            height={24}
            className="w-4 h-4 ml-auto"
          />
        </button>
        {isVisible && (
          <div className="transform scale-100 opacity-100">
            <div className="absolute left-0 mt-2 rounded-md border border-gray-300 bg-white shadow-lg w-72 z-30 bottom-0 mb-14 origin-bottom-left overflow-y-auto">
              <div className="flex flex-col gap-2 p-2">
                {contractDuration.dropDownData.map((item) => (
                  <button
                    className="px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100"
                    key={item.title}
                  >
                    <span className="font-medium text-sm">{item.title}</span>
                    {item.offer && (
                      <span className="text-xs ml-auto py-1 px-2 font-medium rounded-lg bg-green-600/20 text-green-600">
                        + Keine Setupgebühr
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContractDuration;
