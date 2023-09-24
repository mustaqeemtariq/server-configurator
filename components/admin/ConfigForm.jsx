import { useForm } from "react-hook-form";

import Button from "@components/Button";
import FormInput from "@components/admin/form/FormInput";
import { jsonStringifyFormData } from "@utils/admin/utils";

const configFields = [
  // {
  //   name: "configuration_id",
  //   label: "Configuration ID",
  //   type: "number",
  // },
  {
    name: "discount",
    label: "Discount",
    type: "array_object",
    jsonFieldConfig: {
      value: {
        label: "Value",
        name: "value",
        type: "text",
      },
      label: {
        label: "Label",
        name: "label",
        type: "text",
      },
      discount_percentage: {
        label: "Discount Percentage",
        name: "discount_percentage",
        type: "text",
      },
    },
  },
  {
    name: "contract_type",
    label: "Contract Type",
    type: "array_object",
    jsonFieldConfig: {
      value: {
        label: "Value",
        name: "value",
        type: "text",
      },
      label: {
        label: "Label",
        name: "label",
        type: "text",
      },
      discount_price: {
        label: "Discount Price",
        name: "discount_price",
        type: "text",
      },
    },
  },
  {
    name: "contract_duration",
    label: "Contract Duration",
    type: "array_object",
    jsonFieldConfig: {
      value: {
        label: "Value",
        name: "value",
        type: "text",
      },
      label: {
        label: "Label",
        name: "label",
        type: "text",
      },
      discount_price: {
        label: "Discount Price",
        name: "discount_price",
        type: "text",
      },
    },
  },
  {
    name: "payment_method",
    label: "Payment Method",
    type: "array_object",
    jsonFieldConfig: {
      value: {
        label: "Value",
        name: "value",
        type: "text",
      },
      label: {
        label: "Label",
        name: "label",
        type: "text",
      },
      transaction_charges_percentage: {
        label: "Transaction Charges Percentage",
        name: "transaction_charges_percentage",
        type: "text",
      },
    },
  },
];

const ConfigForm = ({
  primaryKeyName,
  data,
  jsonFields,
  editConfiguration,
}) => {
  if (!data) {
    return null;
  }
  const { register, handleSubmit, getValues, setValue, watch } = useForm({
    values: data,
  });

  const onSubmit = (data) => {
    delete data[primaryKeyName];
    editConfiguration(jsonStringifyFormData(data, jsonFields));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {configFields.map((field) => (
        <FormInput
          register={register}
          getValues={getValues}
          setValue={setValue}
          watch={watch}
          {...field}
        />
      ))}

      <Button variant="primary" size="md" type="submit">
        Update
      </Button>
    </form>
  );
};

export default ConfigForm;
