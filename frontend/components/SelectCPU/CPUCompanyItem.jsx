import Image from "next/image";

const CPUCompanyItem = ({ src, id, onClick, isSelected }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <button
      className={`flex items-center gap-2 px-4 py-1 rounded-lg border hover:border-sky-400 hover:bg-sky-300 ${
        isSelected ? "bg-sky-300" : "bg-gray-50"
      }`}
      onClick={handleClick}
    >
      <Image
        src={src}
        alt="logo"
        width={24}
        height={24}
        className="object-contain w-12 h-12"
      />
    </button>
  );
};

export default CPUCompanyItem;
