import Image from "next/image";

const RAMItem = ({ onClick, isSelected, data }) => {
  const handleClick = () => {
    onClick();
  };

  const quantity = `${data.units_left}`;

  return (
    <button
      className={`col-span-6 flex items-center gap-4 bg-gray-50 rounded-lg px-4 py-4 border ${
        isSelected
          ? "bg-sky-100 border-sky-600"
          : "border-sky-400 hover:border-sky-600 hover:bg-sky-100"
      } cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex flex-1 justify-between flex-wrap gap-4">
        <img
          src={data.imagesPath}
          width={64}
          height={64}
          alt="ram"
          className="object-contain"
        />
        <div className="flex flex-1 justify-between">
          <div>
            <h3 className="block text-start leading-0 font-medium">
              {data.ram_name}
            </h3>
            <span className="block text-start text-gray-500 text-xs leading-0">
              {data.price} {data.price_unit} {data.payment_frequency}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 place-self-end">
          <span className="flex items-center gap-1 text-xs text-gray-900 font-medium">
            Quantity Left: {quantity}
          </span>
        </div>
        <div className="flex flex-col gap-2 place-self-end">
          <span className="flex items-center gap-1 text-xs text-gray-900 font-medium">
            {data.storage_size} {data.storage_unit}
          </span>
        </div>
      </div>
    </button>
  );
};

export default RAMItem;
