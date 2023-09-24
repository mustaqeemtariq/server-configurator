
export const DISCOUNT_VALUES = {
  NO_DISCOUNT: {
    name: "no_discount",
    discountPercentage: 0,
  },
  FIRST_SERVER: {
    name: "First server",
    discountPercentage: 5,
  },
  TEN_OR_MORE: {
    name: "10 or more servers",
    discountPercentage: 10,
  },
  TWENTY_OR_MORE: {
    name: "20 or more servers",
    discountPercentage: 15,
  },
  SPECIAL_DISCOUNT: {
    name: "Special Discount",
    discountPercentage: 20,
  },
};

export const STORAGE_TYPE_OPTIONS = [
  {
    label: "SATA",
    value: "SATA"
  },
  {
    label: "M.2",
    value: "M.2"
  }
]

export const STORAGE_UNIT_OPTIONS = [
  {
    label: "GB HDD",
    value: "GB HDD"
  },
  {
    label: "GB SSD",
    value: "GB SSD"
  },
  {
    label: "GB NVMe",
    value: "GB NVMe"
  },
  {
    label: "MB HDD",
    value: "MB HDD"
  },
  {
    label: "MB SSD",
    value: "MB SSD"
  },
  {
    label: "MB NVMe",
    value: "MB NVMe"
  },
  {
    label: "TB HDD",
    value: "TB HDD"
  },
  {
    label: "TB SSD",
    value: "TB SSD"
  },
  {
    label: "TB NVMe",
    value: "TB NVMe"
  }
]

export const DISCOUNT_OPTIONS = [
  {
    label: "No Discount",
    value: DISCOUNT_VALUES.NO_DISCOUNT.name,
  },
  {
    label: "This is my First Server",
    value: DISCOUNT_VALUES.FIRST_SERVER.name,
  },
  {
    label: "I have 10 or more servers",
    value: DISCOUNT_VALUES.TEN_OR_MORE.name,
  },
  {
    label: "I have 20 or more servers",
    value: DISCOUNT_VALUES.TWENTY_OR_MORE.name,
  },
];

export const DISCOUNT_OPTIONS_WITH_SPECIAL_OFFER = [
  ...DISCOUNT_OPTIONS,
  {
    label: "Special Discount",
    value: DISCOUNT_VALUES.SPECIAL_DISCOUNT.name,
  },
];

export const CONTRACT_TYPE_VALUES = {
  DEFAULT: "",
  HARDWARE: "hardware",
  DEDICATED_SERVER: "dedicated_server",
};

export const CONTRACT_TYPE_OPTIONS = [
  {
    label: "Select an option",
    value: CONTRACT_TYPE_VALUES.DEFAULT,
  },
  {
    label: "Hardwaremiete",
    value: CONTRACT_TYPE_VALUES.HARDWARE,
  },
  {
    label: "Dedicated Server",
    value: CONTRACT_TYPE_VALUES.DEDICATED_SERVER,
  },
];

export const CONTRACT_DURATION = {
  ONE_MONTH: {
    label: "1 Month",
    value: "1",
  },
};

export const CONTRACT_DURATION_OPTIONS = Object.values(CONTRACT_DURATION);

export const PAYMENT_METHOD_VALUES = {
  BANK_TRANSFER: "bank_transfer",
  CREDIT_CARD: "credit_card",
  PAYPAL: "paypal",
};

export const PAYMENT_METHOD_OPTIONS = [
  {
    label: "Bank Transfer",
    value: PAYMENT_METHOD_VALUES.BANK_TRANSFER,
  },
  {
    label: "Credit Card",
    value: PAYMENT_METHOD_VALUES.CREDIT_CARD,
  },
  {
    label: "PayPal (+2% fee)",
    value: PAYMENT_METHOD_VALUES.PAYPAL,
  },
];

export const INVENTORY_TYPES = {
  CPU: "cpu",
  GPU: "gpu",
  DISK: "disk",
  RELATION: "cpu-disk relation",
  UPLINK: "uplink",
  RAM: "ram",
  OS: "os",
  ORDER: "order"
};

export const BOOLEAN_OPTIONS = [
  {
    value: "true",
    label: "Yes",
  },
  {
    value: "false",
    label: "No",
  },
];

export const PAYMENT_FREQUENCY_OPTIONS = [
  {
    value: "monthly",
    label: "Monthly",
  },
  {
    value: "annually",
    label: "Annually",
  },
];

export const CPU_COMPANY_OPTIONS = [
  {
    value: "Intel",
    label: "Intel",
  },
  {
    value: "Ryzen",
    label: "Ryzen",
  },
  {
    value: "EPYC",
    label: "EPYC",
  },
];

export const DISK_TYPE_OPTIONS = [
  {
    value: "SATA",
    label: "SATA",
  },
  {
    value: "M.2",
    label: "M.2",
  },
];

export const ADMIN_NAVIGATION_OPTIONS = {
  INVENTORY: {
    name: "inventory",
    label: "Inventory",
  },
  CONFIG: {
    name: "config",
    label: "Config",
  },
};
