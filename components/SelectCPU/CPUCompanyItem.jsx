import Image from "next/image";

const CPUCompanyItem = ({ src, id, onClick, isSelected }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <button
      className={`flex items-center gap-2 h-14 px-4 py-1 rounded-lg border hover:border-sky-400 hover:bg-sky-300 ${
        isSelected ? "bg-sky-300" : "bg-gray-50"
      }`}
      onClick={handleClick}
    >
      <img
        src={src}
        alt="logo"
        width={45}
        height={45}
        className="object-contain"
      />
    </button>
  );
};

export default CPUCompanyItem;
