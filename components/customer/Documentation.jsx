import InventoryItem from "@components/admin/InventoryItem";
import { CUSTOMER_INVENTORY_TYPES } from "@utils/constants"
import { useState } from "react";
import DocumentationItem from "./DocumentationItem";


const CUSTOMER_INVENTORY_TYPE_COMPONENT_MAP = {
    [CUSTOMER_INVENTORY_TYPES.CPU]: () => (
      <DocumentationItem
        title="Get CPU"
        response={""}
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
        jsonFields={["disks"]}
        getAll={getCustomerOrders}
        role="Customer"
      />
    ),
  };

export const Documentation = () => {
    const [currentInventory, setCurrentInventory] = useState(CUSTOMER_INVENTORY_TYPES.CPU);

    return(
        <div className="flex flex-row">
        <div className="w-[240px]">
          <div className="flex flex-col gap-6 bg-gray-100 min-h-[calc(100vh-60px)] py-[48px]">
            {Object.values(CUSTOMER_INVENTORY_TYPES).map((item) => (
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
    )
}