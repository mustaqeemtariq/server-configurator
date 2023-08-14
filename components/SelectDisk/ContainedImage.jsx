import Image from "next/image";

const ContainedImage = ({ src, isSelected }) => {
  return (
    <div
      className={`col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 rounded flex items-center justify-center text-xs text-white p-1 ${
        isSelected ? "bg-sky-200 border border-sky-500" : "bg-gray-200"
      }`}
    >
      <img
        src={src}
        width={44}
        height={44}
        alt="disk"
        className="object-contain opacity-50"
      />
    </div>
  );
};

export default ContainedImage;
