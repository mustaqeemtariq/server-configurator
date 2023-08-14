import Input from "./Input";

const ArrayObjectInput = ({
  label,
  name,
  register,
  getValues,
  setValue,
  watch,
  jsonFieldConfig,
}) => {
  watch(name);

  
  const values = getValues(); 
  // const items = getValues()[name];
  const items = values && values[name] ? values[name] : [];

  const addItem = () => {
    const newItem = {};
    Object.values(jsonFieldConfig).forEach(
      (field) => (newItem[field.name] = "")
    );
    setValue(name, [...items, newItem]);
  };

  const deleteItem = (index) => {
    const newItems = Array.from(items);
    newItems.splice(index, 1);
    setValue(name, newItems);
  };

  const getItemFields = (item, index) => {
    return Object.entries(item).map((field) => {
      const options = jsonFieldConfig[field[0]];
      if (!options ) {
        return null;
      }

      return (
        options.type === "select" ? 
        <div className="flex flex-col mb-2">
          <label className="text-md my-2" htmlFor={`${name}.${index}.${field[0]}`}>{options.label}</label>
          <select className="rounded" register={register}
           onChange={(e) => {
            const updatedItem = { ...item, [field[0]]: e.target.value };
            setValue(name, items.map((el, i) => (i === index ? updatedItem : el)));
          }}          
          name={`${name}.${index}.${field[0]}`}>
          {options?.options.map(v => <option key={v.value} selected={v.value === field[1]} value={v.value}>{v.label}</option>)}
        </select>
        </div> :
        <Input
          type={options.type}
          label={options.label}
          name={`${name}.${index}.${field[0]}`}
          register={register}
          containerClassName="!mb-2"
        />
      );
    });
  };

  return (
    <div className="my-5">
      <p>{label}</p>
      <div>
        {items &&
          items.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-2 items-end">
              {getItemFields(item, index)}
              <button
                type="button"
                variant="danger"
                size="md"
                className="!h-[fit-content] mb-2 border border-red-400 text-red-400 py-[8px] px-[16px] hover:text-white hover:bg-red-400"
                onClick={() => deleteItem(index)}
              >
                Remove
              </button>
            </div>
          ))}
      </div>
      <button
        type="button"
        className="border border-sky-400 mt-2 text-sky-400 py-[8px] px-[16px] hover:text-white hover:bg-sky-400"
        onClick={addItem}
      >
        Add
      </button>
    </div>
  );
};

export default ArrayObjectInput;
