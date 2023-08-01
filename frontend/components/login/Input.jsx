const Input = ({ type, name, label, value, onChange }) => {
  return (
    <div className="flex flex-col mb-5">
      <label for={name} className="text-xl my-2">
        {label}:
      </label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        className="rounded form-input"
      />
    </div>
  );
};

export default Input;
