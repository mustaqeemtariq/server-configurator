import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { selectOS } from "@store/slices/configuratorSlice";

const OSItem = ({ data }) => {
  const { selectedOS } = useSelector((state) => state.configurator.os);
  const [version, setVersion] = useState("");
  const dispatch = useDispatch();

  const isSelected = selectedOS && selectedOS.os_id === data.os_id;
  const osVersions = data.os_version;

  const handleChange = (event) => {
    const updatedVersion = event.target.value;
    dispatch(selectOS({ data, version: updatedVersion }));
    setVersion(updatedVersion);
  };

  useEffect(() => {
    if (!isSelected) {
      setVersion("");
    }
  }, [isSelected]);

  return (
    <button
      className={`col-span-3 p-4 flex flex-col items-center justify-center rounded-lg border ${
        isSelected ? "border-sky-600 bg-sky-100" : "border-sky-400 bg-gray-50"
      }`}
    >
      <img
        src={data.imagesPath}
        width={45}
        height={45}
        className="object-contain"
        alt=""
      />
      <h3 className="font-bold text-lg">{data.os_name}</h3>
      <select
        className="text-xs mt-4 w-full rounded-lg bg-gray-100 border-gray-400 font-medium"
        value={version}
        onChange={handleChange}
      >
        <option value="none">Version</option>
        {osVersions.map((item) => (
          <option value={item.version} key={item.version}>
            {item.version}
          </option>
        ))}
      </select>
    </button>
  );
};

export default OSItem;
