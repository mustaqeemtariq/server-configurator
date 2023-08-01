import { useDispatch, useSelector } from "react-redux";
import GPUItem from "./GPUItem";
import { selectGPU } from "@store/slices/configuratorSlice";

const SelectGPU = () => {
  const {
    filteredGPUs,
    gpu: { selectedGPU },
  } = useSelector((state) => state.configurator);

  const dispatch = useDispatch();

  return (
    <section>
      <div className="max-h-96 overflow-y-auto container mx-auto bg-gray-50 border border-sky-400 shadow-lg rounded-lg">
        <div className="sticky top-0 flex text-lg bg-white font-bold p-4">
          <h3 className="font-bold text-lg">Select GPU</h3>
        </div>
        <div className="">
          <div className="mt-2 flex flex-col gap-4 p-4">
            {filteredGPUs.map((item) => (
              <GPUItem
                onClick={() => dispatch(selectGPU(item))}
                key={item.gpu_id}
                data={item}
                isSelected={item.gpu_id === selectedGPU?.gpu_id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectGPU;
