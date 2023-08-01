import Image from "next/image";

const ContainedImage = ({ src, isSelected }) => {
  return (
    <div
      className={`col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 rounded flex items-center justify-center text-xs text-white p-1 ${
        isSelected ? "bg-sky-200 border border-sky-500" : "bg-gray-200"
      }`}
    >
      <Image
        src={src}
        width={24}
        height={24}
        className="w-12 h-12 object-contain opacity-50"
      />
    </div>
  );
};

export default ContainedImage;
