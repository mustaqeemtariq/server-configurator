import { CUSTOMER_INVENTORY_TYPES, INVENTORY_TYPES } from "@utils/constants";
import { useState } from "react";
import InventoryItem from "./InventoryItem";
import {
  createCPU,
  createCheckout,
  createDisk,
  createGPU,
  createOS,
  createRAM,
  createUplink,
  deleteCPU,
  deleteDisk,
  deleteGPU,
  deleteOS,
  deleteOrder,
  deleteRAM,
  deleteUplink,
  editCPU,
  editDisk,
  editGPU,
  editOS,
  editOrder,
  editRAM,
  editUplink,
  createRelation,
  editRelation,
  deleteRelation,
  createCustomer,
  deleteCustomer,
  getAllCustomers,
} from "@api/admin";
import {
  CPU_TABLE_HEADERS,
  CUSTOMER_CPU_TABLE_HEADERS,
  CUSTOMER_DISK_TABLE_HEADERS,
  CUSTOMER_GPU_TABLE_HEADERS,
  CUSTOMER_RAM_TABLE_HEADERS,
  CUSTOMER_TABLE_HEADERS,
  CUSTOMER_UPLINK_TABLE_HEADERS,
  DISK_TABLE_HEADERS,
  GPU_TABLE_HEADERS,
  ORDER_TABLE_HEADERS,
  OS_TABLE_HEADERS,
  RAM_TABLE_HEADERS,
  RELATION_TABLE_HEADERS,
  UPLINK_TABLE_HEADERS,
} from "@utils/admin/tableHeaders";
import {
  CPU_FORM_FIELDS,
  CUSTOMER_FORM_FIELDS,
  DISK_FORM_FIELDS,
  GPU_FORM_FIELDS,
  ORDER_FORM_FIELDS,
  OS_FORM_FIELDS,
  RAM_FORM_FIELDS,
  RELATION_FORM_FIELDS,
  UPLINK_FORM_FIELDS,
} from "@utils/admin/formFields";
import {
  getAllCPUs,
  getAllDisks,
  getAllGPUs,
  getAllOS,
  getAllOrders,
  getAllRAMs,
  getAllUplinks,
  getAllRelations,
} from "@api/public";
import { createCustomerOrders, getCustomerCPUs, getCustomerDisks, getCustomerGPUs, getCustomerOrders, getCustomerOS, getCustomerRams, getCustomerUPlinks } from "@api/customer";

const INVENTORY_TYPE_COMPONENT_MAP = {
  [INVENTORY_TYPES.CPU]: () => (
    <InventoryItem
      title="CPU"
      primaryKeyName="cpu_id"
      tableHeaders={CPU_TABLE_HEADERS}
      formFields={CPU_FORM_FIELDS}
      jsonFields={[]}
      getAll={getAllCPUs}
      create={createCPU}
      edit={editCPU}
      destroy={deleteCPU}
    />
  ),
  [INVENTORY_TYPES.GPU]: () => (
    <InventoryItem
      title="GPU"
      primaryKeyName="gpu_id"
      tableHeaders={GPU_TABLE_HEADERS}
      formFields={GPU_FORM_FIELDS}
      jsonFields={[]}
      getAll={getAllGPUs}
      create={createGPU}
      edit={editGPU}
      destroy={deleteGPU}
    />
  ),
  [INVENTORY_TYPES.DISK]: () => (
    <InventoryItem
      title="Disk"
      primaryKeyName="disk_id"
      tableHeaders={DISK_TABLE_HEADERS}
      formFields={DISK_FORM_FIELDS}
      jsonFields={[]}
      getAll={getAllDisks}
      create={createDisk}
      edit={editDisk}
      destroy={deleteDisk}
    />
  ),
  [INVENTORY_TYPES.RELATION]: () => (
    <InventoryItem
      title="CPU-DISK"
      primaryKeyName="relation_id"
      tableHeaders={RELATION_TABLE_HEADERS}
      formFields={RELATION_FORM_FIELDS}
      jsonFields={[]}
      getAll={getAllRelations}
      create={createRelation}
      edit={editRelation}
      destroy={deleteRelation}
    />
  ),
  [INVENTORY_TYPES.RAM]: () => (
    <InventoryItem
      title="RAM"
      primaryKeyName="ram_id"
      tableHeaders={RAM_TABLE_HEADERS}
      formFields={RAM_FORM_FIELDS}
      jsonFields={[]}
      getAll={getAllRAMs}
      create={createRAM}
      edit={editRAM}
      destroy={deleteRAM}
    />
  ),
  [INVENTORY_TYPES.OS]: () => (
    <InventoryItem
      title="OS"
      primaryKeyName="os_id"
      tableHeaders={OS_TABLE_HEADERS}
      formFields={OS_FORM_FIELDS}
      jsonFields={["os_version"]}
      getAll={getAllOS}
      create={createOS}
      edit={editOS}
      destroy={deleteOS}
    />
  ),
  [INVENTORY_TYPES.UPLINK]: () => (
    <InventoryItem
      title="Uplink"
      primaryKeyName="uplink_id"
      tableHeaders={UPLINK_TABLE_HEADERS}
      formFields={UPLINK_FORM_FIELDS}
      jsonFields={["data_capcity"]}
      getAll={getAllUplinks}
      create={createUplink}
      edit={editUplink}
      destroy={deleteUplink}
    />
  ),
  [INVENTORY_TYPES.CUSTOMER]: () => (
    <InventoryItem
      title="Customer"
      primaryKeyName="customer_id"
      tableHeaders={CUSTOMER_TABLE_HEADERS}
      formFields={CUSTOMER_FORM_FIELDS}
      jsonFields={[]}
      getAll={getAllCustomers}
      create={createCustomer}
      destroy={deleteCustomer}
    />
  ),
  [INVENTORY_TYPES.ORDER]: () => (
    <InventoryItem
      title="Orders"
      primaryKeyName="order_id"
      tableHeaders={ORDER_TABLE_HEADERS}
      formFields={ORDER_FORM_FIELDS}
      jsonFields={["disks"]}
      getAll={getAllOrders}
      edit={editOrder}
      create={createCheckout}
      destroy={deleteOrder}
    />
  ),
};
const CUSTOMER_INVENTORY_TYPE_COMPONENT_MAP = {
  [CUSTOMER_INVENTORY_TYPES.CPU]: () => (
    <InventoryItem
      title="CPU"
      primaryKeyName="cpu_id"
      tableHeaders={CUSTOMER_CPU_TABLE_HEADERS}
      jsonFields={[]}
      getAll={getCustomerCPUs}
      role="Customer"
    />
  ),
  [CUSTOMER_INVENTORY_TYPES.GPU]: () => (
    <InventoryItem
      title="GPU"
      primaryKeyName="gpu_id"
      tableHeaders={CUSTOMER_GPU_TABLE_HEADERS}
      jsonFields={[]}
      getAll={getCustomerGPUs}
      role="Customer"
    />
  ),
  [CUSTOMER_INVENTORY_TYPES.DISK]: () => (
    <InventoryItem
      title="Disk"
      primaryKeyName="disk_id"
      tableHeaders={CUSTOMER_DISK_TABLE_HEADERS}
      jsonFields={[]}
      getAll={getCustomerDisks}
      role="Customer"
    />
  ),
  [CUSTOMER_INVENTORY_TYPES.RAM]: () => (
    <InventoryItem
      title="RAM"
      primaryKeyName="ram_id"
      tableHeaders={CUSTOMER_RAM_TABLE_HEADERS}
      jsonFields={[]}
      getAll={getCustomerRams}
      role="Customer"
    />
  ),
  [CUSTOMER_INVENTORY_TYPES.OS]: () => (
    <InventoryItem
      title="OS"
      primaryKeyName="os_id"
      tableHeaders={OS_TABLE_HEADERS}
      jsonFields={["os_version"]}
      getAll={getCustomerOS}
      role="Customer"
    />
  ),
  [CUSTOMER_INVENTORY_TYPES.UPLINK]: () => (
    <InventoryItem
      title="Uplink"
      primaryKeyName="uplink_id"
      tableHeaders={CUSTOMER_UPLINK_TABLE_HEADERS}
      jsonFields={["data_capcity"]}
      getAll={getCustomerUPlinks}
      role="Customer"
    />
  ),
  [CUSTOMER_INVENTORY_TYPES.ORDER]: () => (
    <InventoryItem
      title="Orders"
      primaryKeyName="order_id"
      tableHeaders={ORDER_TABLE_HEADERS}
      formFields={ORDER_FORM_FIELDS}
      jsonFields={["disks"]}
      getAll={getCustomerOrders}
      create={createCustomerOrders}
      role="Customer"
    />
  ),
};
const Inventory = ({role}) => {
  const [currentInventory, setCurrentInventory] = useState(INVENTORY_TYPES.CPU);

  const InventoryDetails = role === 'Customer' ? CUSTOMER_INVENTORY_TYPE_COMPONENT_MAP[currentInventory] : INVENTORY_TYPE_COMPONENT_MAP[currentInventory]

  return (
    <div className="flex flex-row">
      <div className="w-[240px]">
        <div className="flex flex-col gap-6 bg-gray-100 min-h-[calc(100vh-60px)] py-[48px]">
          {Object.values(role === 'Customer' ? CUSTOMER_INVENTORY_TYPES :  INVENTORY_TYPES).map((item) => (
            <div
              key={item}
              className={`px-[16px] py-[16px] cursor-pointer w-[100%] text-center uppercase ${
                currentInventory === item
                  ? "bg-gray-300 hover:bg-gray-300"
                  : " hover:bg-gray-200"
              }`}
              onClick={() => setCurrentInventory(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="grow">
        <InventoryDetails />
      </div>
    </div>
  );
};

export default Inventory;
