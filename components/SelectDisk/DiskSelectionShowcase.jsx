import { useSelector } from "react-redux";
import ContainedImage from "./ContainedImage";
import { getTotalDisksCount } from "./utils";

const DiskSelectionShowcase = ({ src, title, isHDD, limit }) => {
  const { selectedHDD, selectedSSD } = useSelector(
    (state) => state.configurator.disk
  );


  const selectedCollection = isHDD ? selectedHDD : selectedSSD;
  const totalSelectedDiskCount = getTotalDisksCount(selectedCollection);

  const components = [];

  for (let i = 0; i < limit; i++) {
    components.push(
      <ContainedImage key={i} src={src} isSelected={i < totalSelectedDiskCount} />
    );
  }

  return (
    <div>
      <h3 className="font-semibold text-sm">{title}</h3>
      <div className="flex-1 gap-2 px-2 py-2 rounded-lg grid grid-cols-10 bg-gray-50 border border-gray-300 mt-2">
        {components}
      </div>
    </div>
  );
};

export default DiskSelectionShowcase;
