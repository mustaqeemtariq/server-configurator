import { useState } from "react";

const Dropdown = ({ value, label, options, onChange }) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onChange && onChange(selectedValue);
  };

  return (
    <div>
      <h3 className="font-bold text-lg text-gray-500">{label}</h3>
      <select
        onChange={handleChange}
        value={value}
        className="bg-gray-50 border border-sky-400 px-4 rounded-md text-gray-700 text-sm flex items-center z-0 w-full gap-2 py-3"
      >
        {options?.map((option) => (
          <option
            className="px-4 py-2 rounded-lg flex items-center gap-4 hover:bg-gray-100"
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
