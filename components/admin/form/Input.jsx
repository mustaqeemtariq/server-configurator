const Input = ({
  type,
  name,
  label,
  register,
  containerClassName,
  errors,
  isEdit,
}) => {
  return (
    <div className={`flex flex-col mb-5 ${containerClassName || ""}`}>
      <label htmlFor={name} className="text-md my-2">
        {label}
      </label>
      {/* <input
        id={name}
        type={type}
        className="rounded form-input"
        {...register(
          name,
          name === 'cpu_id' && {required: true},
          name === 'disk_id' && {required: true},
          isEdit && name === "cpu_id"   ? {
            pattern: /^[^,]*$/,
          }
        : {},
          name === "disk_id"
            ? {
                pattern: /^[^,]*$/,
              }
            : {}
        )}
      /> */}
      <input
        id={name}
        type={type}
        className="rounded form-input"
        {...register(name, {
          required: name === "cpu_id" || name === "disk_id" ? true : false,
          pattern:
           ( isEdit && name === "cpu_id" )|| name === "disk_id" ? /^[^,]*$/ : undefined,
        })}
      />


      {errors?.[name]?.type === "pattern" && (
        <p className="text-red-500 text-base mt-2">
          {name === "disk_id"
            ? "Multiple Disks are not allowed"
            : "Multiple CPUs are not allowed while editing"}
        </p>
      )}
      {errors?.[name]?.type === "required" && (
        <p className="text-red-500 text-base mt-2">
          {name === "disk_id" ? "Disk Id is required" : "CPU Id is required"}
        </p>
      )}
    </div>
  );
};

export default Input;
