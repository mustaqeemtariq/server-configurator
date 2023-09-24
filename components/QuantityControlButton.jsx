import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuantityControlButton = ({ icon, disabled, onClick }) => {
  const handleClick = () => {
    if (disabled) {
      return;
    }
    onClick();
  };

  return (
    <button
      className={`px-1 py-1 rounded-full bg-sky-500 text-white ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} className="w-4 h-4" width={24} height={24} />
    </button>
  );
};

export default QuantityControlButton;
