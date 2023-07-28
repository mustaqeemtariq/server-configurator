const VARIANT_CLASSES = {
  primary: "text-white bg-sky-400 hover:bg-sky-500",
  danger: "text-white bg-red-400 hover:bg-red-500",
};

const SIZE_CLASSES = {
  sm: "",
  md: "px-[16px] py-[8px] text-md",
  lg: "px-[24px] py-[12px] text-lg",
};

const Button = ({ children, onClick, className, type, variant, size }) => {
  return (
    <button
      type={type}
      className={`rounded ${VARIANT_CLASSES[variant || "primary"]} ${
        SIZE_CLASSES[size || "md"]
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
