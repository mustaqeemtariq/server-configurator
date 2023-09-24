import { selectGPU } from "@store/slices/configuratorSlice";
import { useDispatch } from "react-redux";

const GPUItem = ({ data, isSelected }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`py-[24px] px-2 border cursor-pointer rounded flex flex-row gap-5 overflow-auto ${
        isSelected ? "bg-sky-100 border-sky-600 " : "bg-white border-sky-300"
      }`}
      onClick={() => dispatch(selectGPU(data))}
    >
        <img
          src={data.image_path || ""}
          height={54}
          width={54}
          className="object-contain"
          alt="gpu image"
        />
      <div className="flex flex-col">
        <div className="flex flex-row gap-1">
          <p className="font-medium">{data.gpu_name}</p>
          <p className="ml-auto text-md">
            {data.memory_size} {data.memory_unit}
          </p>
        </div>
        <p className="text-gray-500 text-xs">
          {data.price} {data.price_unit}
        </p>
      </div>
    </div>
  );
};

export default GPUItem;
