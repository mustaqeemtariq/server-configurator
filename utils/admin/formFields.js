import {
  BOOLEAN_OPTIONS,
  CONTRACT_DURATION_OPTIONS,
  CONTRACT_TYPE_OPTIONS,
  CPU_COMPANY_OPTIONS,
  DISCOUNT_OPTIONS,
  DISCOUNT_OPTIONS_WITH_SPECIAL_OFFER,
  DISK_TYPE_OPTIONS,
  PAYMENT_FREQUENCY_OPTIONS,
  PAYMENT_METHOD_OPTIONS,
  STORAGE_TYPE_OPTIONS,
  STORAGE_UNIT_OPTIONS,
} from "@utils/constants";

export const CPU_FORM_FIELDS = [
  // {
  //   name: "cpu_id",
  //   label: "CPU ID",
  //   type: "text",
  // },
  {
    name: "company",
    label: "Company",
    type: "select",
    options: CPU_COMPANY_OPTIONS,
  },
  {
    name: "cpu_name",
    label: "CPU Name",
    type: "text",
  },
  {
    name: "num_cores",
    label: "No. of Cores",
    type: "number",
  },
  {
    name: "num_threads",
    label: "No. of Threads",
    type: "number",
  },
  {
    name: "clock_speed",
    label: "Clock Speed",
    type: "text",
  },
  {
    name: "turbo_boost_freq",
    label: "Turbo Boost Frequency",
    type: "text",
  },
  {
    name: "price",
    label: "Price",
    type: "text",
  },
  {
    name: "setup_cost",
    label: "Setup Cost",
    type: "text",
  },
  {
    name: "price_unit",
    label: "Price Unit",
    type: "text",
  },
  {
    name: "payment_frequency",
    label: "Payment Frequency",
    type: "select",
    options: PAYMENT_FREQUENCY_OPTIONS,
  },
  {
    name: "units_left",
    label: "Quantity",
    type: "number",
  },
  {
    name: "delivery_time",
    label: "Delivery Time",
    type: "number",
  },
  {
    name: "special_offer_active",
    label: "Is Special Offer Active?",
    type: "select",
    options: BOOLEAN_OPTIONS,
    isBoolean: true,
  },
  {
    name: "hdd_disk_limit",
    label: "HDD Disk Limit",
    type: "number",
  },
  {
    name: "ssd_disk_limit",
    label: "SSD Disk Limit",
    type: "number",
  },
  {
    name: "imagesPath",
    label: "Images Path",
    type: "text",
  },
  {
    name: "is_enabled",
    label: "Is Enabled?",
    type: "select",
    options: BOOLEAN_OPTIONS,
    isBoolean: true,
  },
  {
    name: "is_gpu_supported",
    label: "Is GPU Supported?",
    type: "select",
    options: BOOLEAN_OPTIONS,
    isBoolean: true,
  },
];

export const GPU_FORM_FIELDS = [
  // {
  //   name: "gpu_id",
  //   label: "GPU ID",
  //   type: "text",
  // },
  {
    name: "cpu_id",
    label: "CPU ID",
    type: "number",
  },
  {
    name: "gpu_name",
    label: "GPU Name",
    type: "text",
  },
  {
    name: "memory_size",
    label: "Memory Size",
    type: "number",
  },
  {
    name: "memory_unit",
    label: "Memory Unit",
    type: "text",
  },
  {
    name: "price",
    label: "Price",
    type: "text",
  },
  {
    name: "price_unit",
    label: "Price Unit",
    type: "text",
  },
  {
    name: "units_left",
    label: "Quantity",
    type: "number",
  },
  {
    name: "image_path",
    label: "Image Path",
    type: "text",
  },
];

export const DISK_FORM_FIELDS = [
  // {
  //   name: "disk_id",
  //   label: "Disk ID",
  //   type: "text",
  // },
  {
    name: "form_factor",
    label: "Form Factor",
    type: "text",
  },
  {
    name: "storage_size",
    label: "Storage Size",
    type: "number",
  },
  {
    name: "storage_unit",
    label: "Storage Unit",
    type: "text",
  },
  // {
  //   name: "has_raid_configuration",
  //   label: "Has RAID Configuration?",
  //   type: "select",
  //   options: BOOLEAN_OPTIONS,
  //   isBoolean: true,
  // },
  {
    name: "is_premium",
    label: "Is Premium",
    type: "select",
    options: BOOLEAN_OPTIONS,
    isBoolean: true,
  },
  {
    name: "price",
    label: "Price",
    type: "text",
  },
  {
    name: "price_unit",
    label: "Price Unit",
    type: "text",
  },
  {
    name: "payment_frequency",
    label: "Payment Frequency",
    type: "select",
    options: PAYMENT_FREQUENCY_OPTIONS,
  },
  {
    name: "units_left",
    label: "Quantity",
    type: "number",
  },
  {
    name: "diskType",
    label: "Disk Type",
    type: "select",
    options: DISK_TYPE_OPTIONS
  },
  {
    name: "imagesPath",
    label: "Images Path",
    type: "text",
  },
];

export const RELATION_FORM_FIELDS = [
  {
    name: "cpu_id",
    label: "CPU ID",
    type: "text",
  },
  {
    name: "disk_id",
    label: "Disk ID",
    type: "text",
  }
];

export const RAM_FORM_FIELDS = [
  // {
  //   name: "ram_id",
  //   label: "RAM ID",
  //   type: "number",
  // },
  {
    name: "cpu_id",
    label: "CPU ID",
    type: "number",
  },
  {
    name: "ram_name",
    label: "Name",
    type: "text",
  },
  {
    name: "storage_size",
    label: "Storage Size",
    type: "number",
  },
  {
    name: "storage_unit",
    label: "Storage Unit",
    type: "text",
  },
  {
    name: "storage_configuration",
    label: "Storage Configuration",
    type: "text",
  },
  {
    name: "is_ECC",
    label: "Is ECC?",
    type: "select",
    options: BOOLEAN_OPTIONS,
    isBoolean: true,
  },
  {
    name: "price",
    label: "Price",
    type: "text",
  },
  {
    name: "price_unit",
    label: "Price Unit",
    type: "text",
  },
  {
    name: "payment_frequency",
    label: "Payment Frequency",
    type: "select",
    options: PAYMENT_FREQUENCY_OPTIONS,
  },
  {
    name: "units_left",
    label: "Quantity",
    type: "number",
  },
  {
    name: "imagesPath",
    label: "Images Path",
    type: "text",
  },
];

export const OS_FORM_FIELDS = [
  // {
  //   name: "os_id",
  //   label: "OS ID",
  //   type: "number",
  // },
  {
    name: "os_name",
    label: "OS Name",
    type: "text",
  },
  {
    name: "os_version",
    label: "Versions",
    type: "array_object",
    jsonFieldConfig: {
      version: {
        label: "Version",
        name: "version",
        type: "text",
      },
      setup_price: {
        label: "Setup Price",
        name: "setup_price",
        type: "text",
      },
    },
  },
  {
    name: "price",
    label: "Price",
    type: "text",
  },
  {
    name: "price_unit",
    label: "Price Unit",
    type: "text",
  },
  {
    name: "units_left",
    label: "Quantity",
    type: "number",
  },
  {
    name: "imagesPath",
    label: "Images Path",
    type: "text",
  },
  {
    name: "setup_price",
    label: "Setup Price",
    type: "text",
  },
  {
    name: "setup_price_unit",
    label: "Setup Price Unit",
    type: "text",
  },
];

export const ORDER_FORM_FIELDS = [
  {
    name: "cpu",
    label: "CPU",
    type: "text",
  },
  {
    name: "disks",
    label: "Disks",
    type: "array_object",
    jsonFieldConfig: {
      quantity: {
        name: "quantity",
        label: "Quantity",
        type: "number",
      },
      size: {
        name: "size",
        label: "Storage Size",
        type: "number",
      },
      storage: {
        name: "storage",
        label: "Storage Type",
        type: "select",
        options: STORAGE_TYPE_OPTIONS
      },
      unit: {
        name: "unit",
        label: "Storage Unit",
        type: "select",
        options: STORAGE_UNIT_OPTIONS
      },
      is_premium: {
        name: "is_premium",
        label: "Premium",
        type: "text"
      }
    },
  },
  {
    name: "ram",
    label: "Ram",
    type: "text",
  },
  {
    name: "os",
    label: "OS",
    type: "text",
  },
  {
    name: "uplink",
    label: "Uplink",
    type: "text",
  },
  {
    name: "setup_cost",
    label: "Setup Cost",
    type: "text",
  },
  {
    name: "monthly_cost",
    label: "Monthly Cost",
    type: "text",
  },
  {
    name: "customer_email",
    label: "Customer Email",
    type: "email",
  },
  {
    name: "customer_no",
    label: "Customer Number",
    type: "number",
  },
  {
    name: "discount_level",
    label: "Discount Level",
    type: "text",
    options: DISCOUNT_OPTIONS
  },
  {
    name: "contract_type",
    label: "Contract Type",
    type: "select",
    options: CONTRACT_TYPE_OPTIONS
  },
  {
    name: "contract_duration",
    label: "Contract Duration",
    type: "select",
    options: CONTRACT_DURATION_OPTIONS
  },
  {
    name: "payment_method",
    label: "Payment Method",
    type: "select",
    options: PAYMENT_METHOD_OPTIONS
  },
  {
    name: "comments",
    label: "Remarks",
    type: "text"
  },
]

export const UPLINK_FORM_FIELDS = [
  // {
  //   name: "uplink_id",
  //   label: "Uplink ID",
  //   type: "number",
  // },
  {
    name: "transfer_speed",
    label: "Transfer Speed",
    type: "text",
  },
  {
    name: "data_capacity",
    label: "Data Capacity",
    type: "array_object",
    jsonFieldConfig: {
      label: {
        label: "Label",
        name: "label",
        type: "text",
      },
      price: {
        label: "Price",
        name: "price",
        type: "text",
      },
    },
  },
  {
    name: "data_unit",
    label: "Data Unit",
    type: "text",
  },
  {
    name: "price",
    label: "Price",
    type: "text",
  },
  {
    name: "price_unit",
    label: "Price Unit",
    type: "text",
  },
  {
    name: "units_left",
    label: "Quantity",
    type: "number",
  },
  {
    name: "limit",
    label: "Limit",
    type: "number",
  },
];
