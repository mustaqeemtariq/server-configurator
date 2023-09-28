export const cpuData = {
  cpu_id: "1",
  cpu_name: "Xeon E3-1245 v6",
  price: 18.0,
  units_left: 1,
  is_available: true,
  disks: [
    {
      disk_id: 1,
      form_factor: "No Raid, Software RAID 0, Software RAID 1",
      price: 5.0,
      units_left: 1,
      is_available: true,
    },
  ],
};

export const gpuData = {
  gpu_id: 1,
  gpu_name: "Nvidia GeForce RTX 2060",
  price: "99.00",
  units_left: 5,
  is_available: "true",
  cpu_inventory: {
    cpu_id: 2,
    cpu_name: "Xeon E3-1240 v5",
    price: "16.00",
    units_left: 3,
    is_available: "true",
  },
};

export const diskData = {
  disk_id: 1,
  form_factor: "No Raid, Software RAID 0, Software RAID 1",
  price: "5.00",
  units_left: 1,
  is_available: "true",
  cpus: [
    {
      cpu_id: 1,
      cpu_name: "Xeon E3-1245 v6",
      price: "18.00",
      units_left: 1,
      is_available: "true",
    },
  ],
};

export const uplinkData = {
  uplink_id: 1,
  transfer_speed: "1Gbit/s",
  data_capacity: [
    {
      label: "Fair Use 50TB",
      price: "17",
    },
    {
      label: "no Traffic (VLAN)",
      price: "7",
    },
  ],
  price: "8",
  units_left: 1,
  is_available: "true",
};

export const ramData = {
  ram_id: 1,
  ram_name: "16GB DDR4 RAM",
  price: "2.00",
  units_left: 4,
  is_available: "true",
  cpu_inventory: {
    cpu_id: 1,
    cpu_name: "Xeon E3-1245 v6",
    price: "18.00",
    units_left: 1,
    is_available: "true",
  },
};

export const osData = {
  os_id: 1,
  os_name: "CentOs",
  units_left: 12,
  os_version: [
    {
      version: "CentOS 7",
      setup_price: "0",
    },
    {
      version: "CentOS 8",
      setup_price: "0",
    },
  ],
  is_available: "true",
};

export const orderData = {
  order_id: 60,
  cpu: "1x EPYC 7551P",
  disks:
    '[{"quantity":1,"size":"3.84","unit":"TB NVMe","storage":"M.2","is_premium":true}]',
  ram: "1x 512GB DDR4 RegECC RAM",
  gpu: "-",
  os: "Debian 12",
  uplink: "1x 10Gbit/s - 20TB Traffic (39 €)",
  setup_cost: "25.13",
  monthly_cost: "171.95",
  customer_email: "firehost24de@gmail.com",
  discount_level: "first_server",
  contract_type: "dedicated_server",
  contract_duration: 1,
  payment_method: "bank_transfer",
  status: null,
  comments: "dazu würden wir gerne noch eine Path IP Netz /28 nehmen ",
  customer_no: "125734",
  created_timestamp: "2023-08-22T21:00:16.000Z",
  modified_timestamp: "2023-08-22T21:00:16.000Z",
};
