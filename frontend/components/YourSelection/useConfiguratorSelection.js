import { useSelector } from "react-redux";
import {
  getAllDisksSelection,
  getCPUSelection,
  getGPUSelection,
  getMonthlyPayments,
  getOSSelection,
  getRAMSelection,
  getSetupCosts,
  getUplinkSelection,
} from "./utils";

const useConfiguratorSelection = () => {
  const {
    cpu,
    disk,
    ram,
    os,
    uplink,
    gpu,
    paymentMethod,
    discount,
    contractType,
    contractDuration,
    config,
  } = useSelector((state) => state.configurator);

  const cpuSelection = getCPUSelection(cpu);
  const diskSelection = getAllDisksSelection(disk);
  const ramSelection = getRAMSelection(ram);
  const osSelection = getOSSelection(os);
  const uplinkSelection = getUplinkSelection(uplink);
  const gpuSelection = getGPUSelection(gpu)

  const setupCosts = getSetupCosts(
    cpu,
    os,
    config?.contract_duration?.find((item) => item.value === contractDuration)
  );

  const monthlyPayments = getMonthlyPayments(
    cpu,
    disk,
    ram,
    os,
    uplink,
    gpu,
    config?.payment_method?.find((item) => item.value === paymentMethod),
    config?.contract_type?.find((item) => item.value === contractType),
    config?.contract_duration?.find((item) => item.value === contractDuration),
    config?.discount?.find((item) => item.value === discount)
  );

  return {
    cpuSelection,
    diskSelection,
    ramSelection,
    osSelection,
    gpuSelection,
    uplinkSelection,
    setupCosts,
    monthlyPayments,
  };
};

export default useConfiguratorSelection;
