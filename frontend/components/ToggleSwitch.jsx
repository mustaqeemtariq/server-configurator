import React, { useState } from "react";

const ToggleSwitch = ({ onToggle, value = false }) => {
  const [isOn, setIsOn] = useState(value);

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  return (
    <div
      className={`relative inline-block min-w-[40px] h-6 rounded-full ${
        isOn ? "bg-green-400" : "bg-gray-300"
      } transition-colors duration-300 ease-in-out cursor-pointer`}
      onClick={handleToggle}
    >
      <div
        className={`absolute inset-1 w-4 h-4 rounded-full ${
          isOn ? "bg-white transform translate-x-4" : "bg-white"
        } transition-transform duration-300 ease-in-out`}
      >
        <input
          type="checkbox"
          className="absolute opacity-0 w-0 h-0"
          checked={isOn}
          readOnly
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
