import { DISCOUNT_VALUES, PAYMENT_METHOD_VALUES } from "@utils/constants";

////////////////////////
// Selected item text //
////////////////////////
const getDiskSelection = (selection, type) => {
  return Object.values(selection).map((disk) => {
    const {
      quantity,
      variant,
      data: { storage_size, storage_unit },
    } = disk;
    return `${quantity}x ${storage_size} ${storage_unit} ${type} - ${variant} `;
  });
};

export const getAllDisksSelection = (disk) => {
  const { selectedHDD, selectedSSD } = disk;
  const allDisksSelection = [];
  allDisksSelection.push(...getDiskSelection(selectedHDD, "SATA"));
  allDisksSelection.push(...getDiskSelection(selectedSSD, "M.2"));
  return allDisksSelection;
};

export const getRAMSelection = (ram) => {
  const { selectedRAM } = ram;
  return selectedRAM ? `1x ${selectedRAM.ram_name}` : "-";
};

export const getOSSelection = (os) => {
  const { selectedOSVersion } = os;
  return selectedOSVersion || "-";
};

export const getUplinkSelection = (uplink) => {
  const { selectedUplink, selectedUplinkVariant, selectedUplinkQuantity } =
    uplink;
  return selectedUplink
    ? `${selectedUplinkQuantity}x ${selectedUplink.transfer_speed} - ${selectedUplinkVariant.label} (${selectedUplinkVariant.price} €)`
    : "-";
};

export const getCPUSelection = (cpu) => {
  const { selectedCPU } = cpu;
  return selectedCPU
    ? `1x ${selectedCPU.company} ${selectedCPU.cpu_name}`
    : "-";
};

export const getGPUSelection = (gpu) => {
  const { selectedGPU } = gpu;
  return selectedGPU
    ? `1x ${selectedGPU.gpu_name} ${selectedGPU.memory_size}${selectedGPU.memory_unit}`
    : "-";
};

///////////////////////////
// Calculate Setup Costs //
///////////////////////////
export const getSetupCosts = (cpu, os, contractDuration) => {
  let total = 0;

  const cpuSetupCost = parseFloat(cpu?.selectedCPU?.setup_cost) || 0;

  const { selectedOS, selectedOSVersion } = os;
  let osSetupCost = 0;
  if (selectedOS) {
    const osVersion = selectedOS.os_version.find(
      (version) => version.version === selectedOSVersion
    );
    osSetupCost = parseFloat(osVersion?.setup_price);
  }

  total += cpuSetupCost + (osSetupCost || 0);

  const contractDurationDiscount =
    parseFloat(contractDuration?.discount_price) || 0;

  total -= contractDurationDiscount;

  return total;
};

/////////////////////////////
// Calculate Monthly Costs //
/////////////////////////////
const getMonthlyPaymentsForDisks = (selection) => {
  let total = 0;
  Object.values(selection).forEach((selection) => {
    const {
      quantity,
      data: { price },
    } = selection;
    total += quantity * parseFloat(price);
  });

  return total;
};

const getMonthlyPaymentsForUplink = (uplink) => {

  // const { selectedUplinkQuantity: quantity, selectedUplinkVariant: variant } =
  //   uplink;

  // const price = (variant && parseFloat(variant.price)) || 0;
  return parseFloat(uplink.selectedUplink?.price) * parseFloat(uplink.selectedUplinkQuantity) + parseFloat(uplink.selectedUplinkVariant?.price)
  // return price * quantity || 0;
};

export const getMonthlyPayments = (
  cpu,
  disk,
  ram,
  os,
  uplink,
  gpu,
  paymentMethod,
  contractType,
  contractDuration,
  discount
) => {
  let total = 0;

  const cpuPrice = parseFloat(cpu?.selectedCPU?.price) || 0;
  const ramPrice = parseFloat(ram?.selectedRAM?.price) || 0;
  const osPrice = parseFloat(os?.selectedOS?.price) || 0;
  const uplinkPrice = getMonthlyPaymentsForUplink(uplink);
  const diskPrice =
    getMonthlyPaymentsForDisks(disk.selectedHDD) +
    getMonthlyPaymentsForDisks(disk.selectedSSD);
  const gpuPrice = parseFloat(gpu?.selectedGPU?.price) || 0;
  const totalMonthlyPayments =
    cpuPrice + ramPrice + osPrice + uplinkPrice + diskPrice + gpuPrice;

  const contractTypeDiscount = parseFloat(contractType?.discount_price) || 0;

  total += totalMonthlyPayments - contractTypeDiscount;

  let totalDiscount = 0;
  if (discount?.discount_percentage) {
    totalDiscount =
      total * ((parseFloat(discount?.discount_percentage) || 0) / 100);
  }

  total -= totalDiscount;

  const paymentMethodCharges =
    (total * parseFloat(paymentMethod?.transaction_charges_percentage)) / 100;

  total += paymentMethodCharges;

  return total;
};
