import { contractType } from "../../utils/DropDowndata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const ContractType = ({ isVisible, onClick }) => {
  const handleClick = () => {
    onClick(!isVisible);
  };
  return (
    <div className="mt-2">
      <h3 className="font-bold text-lg text-gray-500">{contractType.title}</h3>
      <div className="relative z-1 w-full">
        <button
          className="relative bg-gray-50 border border-gray-300 px-4 py-3 rounded-md text-gray-700 text-sm flex items-center z-0 w-full gap-2 py-3"
          onClick={handleClick}
        >
          {contractType.initialHeading}
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
                {contractType.dropDownData.map((item) => (
                  <button
                    className="px-2 py-2 flex rounded-lg items-center gap-4 hover:bg-gray-100"
                    key={item}
                  >
                    <span className="font-medium text-sm">{item}</span>
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

export default ContractType;
