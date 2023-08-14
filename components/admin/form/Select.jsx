const Select = ({ type, name, label, register, options }) => {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={name} className="text-md my-2">
        {label}:
      </label>
      <select
        id={name}
        type={type}
        className="rounded form-input"
        {...register(name)}
      >
        {options?.map((option) => (
          <option key={option.label} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
