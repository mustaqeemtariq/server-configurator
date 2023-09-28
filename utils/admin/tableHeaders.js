export const CPU_TABLE_HEADERS = [
  {
    name: "cpu_id",
    label: "ID",
    size: 1,
  },
  {
    name: "cpu_name",
    label: "CPU Name",
    size: 2,
  },
  {
    name: "company",
    label: "Company",
    size: 2,
  },
  {
    name: "price",
    label: "Price",
    size: 1,
  },
  {
    name: "setup_cost",
    label: "Setup Cost",
    size: 1,
  },
  {
    name: "is_enabled",
    label: "Enabled",
    size: 1,
  },
  {
    name: "units_left",
    label: "Quantity",
    size: 1,
  },
];
export const CUSTOMER_CPU_TABLE_HEADERS = [
  {
    name: "cpu_id",
    label: "ID",
    size: 2,
  },
  {
    name: "cpu_name",
    label: "CPU Name",
    size: 2,
  },
  {
    name: "price",
    label: "Price",
    size: 2,
  },
  {
    name: "units_left",
    label: "Quantity",
    size: 2,
  },
];

export const GPU_TABLE_HEADERS = [
  {
    name: "gpu_id",
    label: "GPU ID",
    size: 1,
  },
  {
    name: "cpu_id",
    label: "CPU ID",
    size: 1,
  },
  {
    name: "cpu_inventory",
    label: "CPU Name",
    size: 2,
  },
  {
    name: "gpu_name",
    label: "GPU Name",
    size: 3,
  },
  {
    name: "price",
    label: "Price",
    size: 1,
  },
];
export const CUSTOMER_GPU_TABLE_HEADERS = [
  {
    name: "gpu_id",
    label: "GPU ID",
    size: 1,
  },
  {
    name: "cpu_inventory",
    label: "CPU Name",
    size: 3,
  },
  {
    name: "gpu_name",
    label: "GPU Name",
    size: 3,
  },
  {
    name: "price",
    label: "Price",
    size: 2,
  },
];
export const DISK_TABLE_HEADERS = [
  {
    name: "disk_id",
    label: "ID",
    size: 1,
  },
  {
    name: "diskType",
    label: "Disk Type",
    size: 2,
  },
  {
    name: "storage_size",
    label: "Storage Size",
    size: 2,
  },
  {
    name: "is_premium",
    label: "Premium",
    size: 2,
  },
  {
    name: "storage_unit",
    label: "Storage Unit",
    size: 2,
  },
  {
    name: "price",
    label: "Price",
    size: 1,
  },
];
export const CUSTOMER_DISK_TABLE_HEADERS = [
  {
    name: "disk_id",
    label: "ID",
    size: 4,
  },
  {
    name: "price",
    label: "Price",
    size: 4,
  },
];

export const RELATION_TABLE_HEADERS = [
  {
    name: "relation_id",
    label: "ID",
    size: 2,
  },
  {
    name: "cpu_id",
    label: "CPU ID",
    size: 2,
  },
  {
    name: "cpu_inventory",
    label: "CPU Name",
    size: 3,
  },
  {
    name: "disk_id",
    label: "Disk ID",
    size: 2,
  },
  {
    name: "disk_inventory",
    label: "Disk Name",
    size: 3,
  }
];

export const RAM_TABLE_HEADERS = [
  {
    name: "ram_id",
    label: "ID",
    size: 1,
  },
  {
    name: "cpu_id",
    label: "CPU ID",
    size: 1,
  },
  {
    name: "cpu_inventory",
    label: "CPU Name",
    size: 2,
  },
  {
    name: "storage_size",
    label: "Size",
    size: 2,
  },
  {
    name: "ram_name",
    label: "Name",
    size: 2,
  },
  {
    name: "is_ECC",
    label: "ECC",
    size: 1
  },
  {
    name: "price",
    label: "Price",
    size: 1,
  },
  {
    name: "units_left",
    label: "Quantity",
    size: 1,
  }
];
export const CUSTOMER_RAM_TABLE_HEADERS = [
  {
    name: "ram_id",
    label: "ID",
    size: 1,
  },
  {
    name: "cpu_inventory",
    label: "CPU Name",
    size: 2,
  },
  {
    name: "ram_name",
    label: "Name",
    size: 3,
  },
  {
    name: "price",
    label: "Price",
    size: 1,
  },
  {
    name: "units_left",
    label: "Quantity",
    size: 1,
  }
];

// TODO
export const OS_TABLE_HEADERS = [
  {
    name: "os_id",
    label: "ID",
    size: 2,
  },
  {
    name: "os_name",
    label: "Name",
    size: 3,
  },
  {
    name: "units_left",
    label: "Quantity",
    size: 2
  }
  // {
  //   name: "os_version",
  //   label: "Version",
  //   size: 2,
  // },
];

export const UPLINK_TABLE_HEADERS = [
  {
    name: "uplink_id",
    label: "ID",
    size: 2,
  },
  {
    name: "transfer_speed",
    label: "Transfer Speed",
    size: 3,
  },
  {
    name: "data_unit",
    label: "Data Unit",
    size: 2
  }
];
export const CUSTOMER_UPLINK_TABLE_HEADERS = [
  {
    name: "uplink_id",
    label: "ID",
    size: 2,
  },
  {
    name: "transfer_speed",
    label: "Transfer Speed",
    size: 3,
  }
];

export const CUSTOMER_TABLE_HEADERS = [
  {
    name: "id",
    label: "ID",
    size: 1,
  },
  {
    name: "name",
    label: "Name",
    size: 3,
  },
  {
    name: "email",
    label: "Email",
    size: 3,
  }
];

export const ORDER_TABLE_HEADERS = [
  {
    name: "order_id",
    label: "ID",
    size: 1,
  },
  {
    name: "customer_email",
    label: "Customer Email",
    size: 3,
  },
  {
    name: "customer_no",
    label: "Customer Numer",
    size: 1,
  },
  {
    name: "contract_type",
    label: "Contract Type",
    size: 2,
  },
  {
    name: "contract_duration",
    label: "Contract Duration",
    size: 1,
  },
  {
    name: "discount_level",
    label: "Discount Level",
    size: 2,
  },
  {
    name: "monthly_cost",
    label: "Monthly Cost",
    size: 1,
  },
  {
    name: "setup_cost",
    label: "Setup Cost",
    size: 1
  },
  {
    name: "modified_timestamp",
    label: "Updated At",
    size: 2
  },
  {
    name: "created_timestamp",
    label: "Created At",
    size: 2
  },
];
