const Input = ({ type, name, label, register, containerClassName }) => {
  return (
    <div className={`flex flex-col mb-5 ${containerClassName || ""}`}>
      <label htmlFor={name} className="text-md my-2">
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="rounded form-input"
        {...register(name)}
      />
    </div>
  );
};

export default Input;
