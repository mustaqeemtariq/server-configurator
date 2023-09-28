import InventoryItem from "@components/admin/InventoryItem";
import { CUSTOMER_INVENTORY_TYPES } from "@utils/constants";
import { useState } from "react";
import DocumentationItem from "./DocumentationItem";
import { cpuData, diskData, gpuData, orderData, osData, ramData, uplinkData } from "./data";

const CUSTOMER_INVENTORY_TYPE_COMPONENT_MAP = {
  [CUSTOMER_INVENTORY_TYPES.CPU]: () => (
    <DocumentationItem
      title="Get CPU"
      endpoint="/api/public/cpus"
      method="get"
      description={`
      The provided JSON response, cpuData, appears to represent information about a computer CPU and its associated disk. Here's a short description of the data structure:
      <ul>
        <li><strong>cpu_id:</strong> A unique identifier for the CPU (in this case, set to 1).</li>
        <li><strong>cpu_name:</strong> The name or model of the CPU (e.g., Xeon E3-1245 v6).</li>
        <li><strong>price:</strong> The price of the CPU (e.g., 18.00).</li>
        <li><strong>units_left:</strong> The number of units of this CPU available (e.g., 1).</li>
        <li><strong>is_available:</strong> A boolean indicating whether the CPU is available (e.g., true).</li>
      </ul><br/>
      It also contains an array named disks, which represents information about disk options associated with this CPU:
      <ul>
        <li><strong>disk_id:</strong> A unique identifier for the disk.</li>
        <li><strong>form_factor:</strong> Describes the disk's form factor or RAID configurations (e.g., No Raid, Software RAID 0, Software RAID 1).</li>
        <li><strong>price:</strong> The price of the disk (e.g., 5.00).</li>
        <li><strong>units_left:</strong> The number of units of this disk available (e.g., 1).</li>
        <li><strong>is_available:</strong> A boolean indicating whether the disk is available (e.g., true).</li>
      </ul><br/>
      This JSON response provides information about a CPU and its compatible disks, including their attributes, availability, and pricing.
    `}
      response={cpuData}
      access="Accessible To All"
    />
  ),
  [CUSTOMER_INVENTORY_TYPES.GPU]: () => (
    <DocumentationItem
      title="Get GPU"
      description="The provided JSON response, gpuData, represents information about a GPU (Graphics Processing Unit) and its associated CPU inventory. Here's a short description of the data structure:
      <ul>
        <li><strong>gpu_id:</strong> A unique identifier for the GPU (in this case, set to 1).</li>
        <li><strong>gpu_name:</strong> The name or model of the GPU (e.g., Nvidia GeForce RTX 2060).</li>
        <li><strong>price:</strong> The price of the GPU (e.g., 99.00).</li>
        <li><strong>units_left:</strong> The number of units of this GPU available (e.g., 5).</li>
        <li><strong>is_available:</strong> A string indicating whether the GPU is available (e.g., true). It's worth noting that it might be more appropriate to represent this as a boolean (true) rather than a string.</li>
      </ul><br />
      Furthermore, it contains an object named cpu_inventory, which represents information about a CPU associated with this GPU:
      <ul>
        <li><strong>cpu_id:</strong> A unique identifier for the CPU (e.g., 2).</li>
        <li><strong>cpu_name:</strong> The name or model of the CPU (e.g., Xeon E3-1240 v5).</li>
        <li><strong>price:</strong> The price of the CPU (e.g., 16.00).</li>
        <li><strong>units_left:</strong> The number of units of this CPU available (e.g., 3).</li>
        <li><strong>is_available:</strong> A string indicating whether the CPU is available (e.g., true). Again, it might be more suitable to use a boolean here.</li>
      </ul></br>
      This JSON response provides information about a GPU and its associated CPU inventory, including their attributes, availability, and pricing."
      endpoint="/api/public/gpus"
      method="get"
      response={gpuData}
      access="Accessible To All"
    />
  ),
  [CUSTOMER_INVENTORY_TYPES.DISK]: () => (
    <DocumentationItem
      title="Get Disk"
      description={`The provided data represents information about a disk and its associated CPUs. Here's a breakdown of the data structure:
      <ul>
        <li><strong>disk_id:</strong> A unique identifier for the disk (in this case, set to 1).</li>
        <li><strong>form_factor:</strong> Describes the disk's form factor or RAID configurations (e.g., "No Raid, Software RAID 0, Software RAID 1").</li>
        <li><strong>price:</strong> The price of the disk (e.g., "5.00").</li>
        <li><strong>units_left:</strong> The number of units of this disk available (e.g., 1).</li>
        <li><strong>is_available:</strong> A string indicating whether the disk is available (e.g., "true"). It's worth noting that it might be more appropriate to represent this as a boolean (<em>true</em>) rather than a string.</li>
      </ul><br/>
      Additionally, the data includes an array of CPUs associated with this disk. Each CPU object in the array has the following attributes:
      <ul>
        <li><strong>cpu_id:</strong> A unique identifier for the CPU (e.g., 1).</li>
        <li><strong>cpu_name:</strong> The name or model of the CPU (e.g., "Xeon E3-1245 v6").</li>
        <li><strong>price:</strong> The price of the CPU (e.g., "18.00").</li>
        <li><strong>units_left:</strong> The number of units of this CPU available (e.g., 1).</li>
        <li><strong>is_available:</strong> A string indicating whether the CPU is available (e.g., "true"). Again, it might be more suitable to use a boolean (<em>true</em>) here for representing availability.</li>
      </ul><br/>
      This data structure provides comprehensive information about a disk, including its attributes, availability, pricing, and the CPUs associated with it.
    `}
      endpoint="/api/public/disks"
      method="get"
      response={diskData}
      access="Accessible To All"
    />
  ),
  [CUSTOMER_INVENTORY_TYPES.RAM]: () => (
    <DocumentationItem
      title="Get RAM"
      description={`The provided data represents information about RAM (Random Access Memory) and its associated CPU. Here's a breakdown of the data structure:
      <ul>
        <li><strong>ram_id:</strong> A unique identifier for the RAM module (in this case, set to 1).</li>
        <li><strong>ram_name:</strong> The name or model of the RAM module (e.g., "16GB DDR4 RAM").</li>
        <li><strong>price:</strong> The price of the RAM module (e.g., "2.00").</li>
        <li><strong>units_left:</strong> The number of units of this RAM module available (e.g., 4).</li>
        <li><strong>is_available:</strong> A string indicating whether the RAM module is available (e.g., "true"). It's worth noting that it might be more appropriate to represent this as a boolean (<em>true</em>) rather than a string.</li>
        <li><strong>cpu_inventory:</strong> An object representing information about a CPU associated with this RAM module:</li>
        <ul>
          <li><strong>cpu_id:</strong> A unique identifier for the CPU (e.g., 1).</li>
          <li><strong>cpu_name:</strong> The name or model of the CPU (e.g., "Xeon E3-1245 v6").</li>
          <li><strong>price:</strong> The price of the CPU (e.g., "18.00").</li>
          <li><strong>units_left:</strong> The number of units of this CPU available (e.g., 1).</li>
          <li><strong>is_available:</strong> A string indicating whether the CPU is available (e.g., "true"). Again, it might be more suitable to use a boolean (<em>true</em>) for representing availability.</li>
        </ul>
      </ul><br />
      This JSON data structure provides comprehensive information about a RAM module and its associated CPU, including their attributes, availability, pricing, and associated details.`}
      endpoint="/api/public/rams"
      method="get"
      response={ramData}
      access="Accessible To All"
    />
  ),
  [CUSTOMER_INVENTORY_TYPES.OS]: () => (
    <DocumentationItem
      title="Get OS"
      description={`The provided data represents information about an operating system (OS) and its versions. Here's a breakdown of the data structure:
      <ul>
        <li><strong>os_id:</strong> A unique identifier for the operating system (OS) (in this case, set to 1).</li>
        <li><strong>os_name:</strong> The name of the operating system (e.g., "CentOs").</li>
        <li><strong>units_left:</strong> The number of units of this OS available (e.g., 12).</li>
        <li><strong>os_version:</strong> An array containing different versions of the OS:</li>
        <ul>
          <li>
            <strong>Version 1:</strong>
            <ul>
              <li><strong>version:</strong> The specific version of the OS (e.g., "CentOS 7").</li>
              <li><strong>setup_price:</strong> The setup price associated with this OS version (e.g., "0").</li>
            </ul>
          </li>
          <li>
            <strong>Version 2:</strong>
            <ul>
              <li><strong>version:</strong> The specific version of the OS (e.g., "CentOS 8").</li>
              <li><strong>setup_price:</strong> The setup price associated with this OS version (e.g., "0").</li>
            </ul>
          </li>
        </ul>
        <li><strong>is_available:</strong> A string indicating whether the OS is available (e.g., "true"). It's worth noting that it might be more appropriate to represent this as a boolean (<em>true</em>) rather than a string.</li>
      </ul><br/>
      This JSON data structure provides detailed information about an operating system, including its name, available versions, setup prices, availability, and associated details.`}
      endpoint="/api/public/os"
      method="get"
      response={osData}
      access="Accessible To All"
    />
  ),
  [CUSTOMER_INVENTORY_TYPES.UPLINK]: () => (
    <DocumentationItem
      title="Get Uplink"
      description={`The provided data represents information about an uplink. Here's a breakdown of the data structure:
      <ul>
        <li><strong>uplink_id:</strong> A unique identifier for the uplink (in this case, set to 1).</li>
        <li><strong>transfer_speed:</strong> The transfer speed of the uplink (e.g., "1Gbit/s").</li>
        <li><strong>data_capacity:</strong> An array containing different data capacity options:</li>
        <ul>
          <li>
            <strong>Option 1:</strong>
            <ul>
              <li><strong>label:</strong> Describes the data capacity option (e.g., "Fair Use 50TB").</li>
              <li><strong>price:</strong> The price associated with this option (e.g., "17").</li>
            </ul>
          </li>
          <li>
            <strong>Option 2:</strong>
            <ul>
              <li><strong>label:</strong> Describes the data capacity option (e.g., "no Traffic (VLAN)").</li>
              <li><strong>price:</strong> The price associated with this option (e.g., "7").</li>
            </ul>
          </li>
        </ul>
        <li><strong>price:</strong> The base price of the uplink (e.g., "8").</li>
        <li><strong>units_left:</strong> The number of units of this uplink available (e.g., 1).</li>
        <li><strong>is_available:</strong> A string indicating whether the uplink is available (e.g., "true"). It's worth noting that it might be more appropriate to represent this as a boolean (<em>true</em>) rather than a string.</li>
      </ul><br/>
      This JSON data structure provides detailed information about an uplink, including its transfer speed, various data capacity options, base price, availability, and associated attributes.
   `}
      endpoint="/api/public/uplinks"
      method="get"
      response={uplinkData}
      access="Accessible To All"
    />
  ),
  [CUSTOMER_INVENTORY_TYPES.ORDER]: () => (
    <DocumentationItem
      title="Get Orders"
      description={`The provided data represents information about an order for server hosting services. Here's a breakdown of the data structure:
      <ul>
        <li><strong>order_id:</strong> A unique identifier for the order (in this case, set to 60).</li>
        <li><strong>cpu:</strong> Information about the CPU included in the order (e.g., "1x EPYC 7551P").</li>
        <li><strong>disks:</strong> A JSON string representing information about disks included in the order:</li>
        <ul>
          <li>
            <strong>Quantity:</strong> The quantity of disks (e.g., 1).
          </li>
          <li>
            <strong>Size:</strong> The size of the disk (e.g., "3.84").
          </li>
          <li>
            <strong>Unit:</strong> The unit of the disk size (e.g., "TB NVMe").
          </li>
          <li>
            <strong>Storage:</strong> The type of storage (e.g., "M.2").
          </li>
          <li>
            <strong>Is Premium:</strong> A boolean indicating whether the disk is premium (e.g., true).
          </li>
        </ul>
        <li><strong>ram:</strong> Information about the RAM included in the order (e.g., "1x 512GB DDR4 RegECC RAM").</li>
        <li><strong>gpu:</strong> Information about the GPU (Graphics Processing Unit) included in the order (e.g., "-").</li>
        <li><strong>os:</strong> The operating system included in the order (e.g., "Debian 12").</li>
        <li><strong>uplink:</strong> Information about the uplink included in the order (e.g., "1x 10Gbit/s - 20TB Traffic (39 €)").</li>
        <li><strong>setup_cost:</strong> The setup cost associated with the order (e.g., "25.13").</li>
        <li><strong>monthly_cost:</strong> The monthly cost associated with the order (e.g., "171.95").</li>
        <li><strong>customer_email:</strong> The email address of the customer who placed the order (e.g., "firehost24de@gmail.com").</li>
        <li><strong>discount_level:</strong> The discount level applied to the order (e.g., "first_server").</li>
        <li><strong>contract_type:</strong> The type of contract (e.g., "dedicated_server").</li>
        <li><strong>contract_duration:</strong> The duration of the contract in months (e.g., 1).</li>
        <li><strong>payment_method:</strong> The payment method used for the order (e.g., "bank_transfer").</li>
        <li><strong>status:</strong> The status of the order (e.g., null).</li>
        <li><strong>comments:</strong> Additional comments or notes regarding the order (e.g., "dazu würden wir gerne noch eine Path IP Netz /28 nehmen").</li>
        <li><strong>customer_no:</strong> The customer number associated with the order (e.g., "125734").</li>
        <li><strong>created_timestamp:</strong> The timestamp when the order was created (e.g., "2023-08-22T21:00:16.000Z").</li>
        <li><strong>modified_timestamp:</strong> The timestamp when the order was last modified (e.g., "2023-08-22T21:00:16.000Z").</li>
      </ul><br/>
      This JSON data structure provides detailed information about an order for server hosting services, including hardware components, pricing, customer information, and contract details.`}
      endpoint="/api/public/order/:id"
      method="get"
      response={orderData}
      access="Accessible To All"
    />
  ),
};

export const Documentation = () => {
  const [currentInventory, setCurrentInventory] = useState(
    CUSTOMER_INVENTORY_TYPES.CPU
  );

  const InventoryDetails =
    CUSTOMER_INVENTORY_TYPE_COMPONENT_MAP[currentInventory];

  return (
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
  );
};
