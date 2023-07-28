import { useForm } from "react-hook-form";

import Button from "@components/Button";
import FormInput from "@components/admin/form/FormInput";
import { jsonStringifyFormData } from "@utils/admin/utils";

const ItemForm = ({
  primaryKeyName,
  data,
  fields,
  jsonFields,
  createItem,
  editItem,
  deleteItem,
}) => {
  if (!data) {
    return null;
  }
  const ID = data[primaryKeyName];

  const isEditForm = !!Object.values(data).length;
  const { register, handleSubmit, getValues, setValue, watch, formState: { errors } } = useForm({
    values: data,
    mode: "all"
  });

  const onSubmit = (data) => {
    if (isEditForm) {
      delete data[primaryKeyName];
      editItem(ID, jsonStringifyFormData(data, jsonFields));
    } else {
      createItem(jsonStringifyFormData(data, jsonFields));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <FormInput
          register={register}
          isEdit={isEditForm}
          errors={errors}
          getValues={getValues}
          setValue={setValue}
          watch={watch}
          {...field}
        />
      ))}
      {isEditForm ? (
        <div className="flex flex-row gap-5">
          <Button variant="primary" size="md" type="submit">
            Edit
          </Button>

          <Button
            variant="danger"
            size="md"
            type="button"
            onClick={() => deleteItem(ID)}
          >
            Delete
          </Button>
        </div>
      ) : (
        <Button variant="primary" size="md" type="submit">
          Create
        </Button>
      )}
    </form>
  );
};

export default ItemForm;
