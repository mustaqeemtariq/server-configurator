import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCPUs,
  getAllDisks,
  getAllRAMs,
  getAllUplinkInventories,
  getAllOSs,
  filterCPUsByCompany,
  filterDisksByCPU,
  filterRAMsByCPU,
  getAllGPUs,
  filterGPUsByCPU,
  getConfig,
} from "@store/thunks";
import { jsonParseFormData, jsonParseObjectsArray } from "@utils/admin/utils";
import {
  CONTRACT_DURATION,
  CONTRACT_TYPE_VALUES,
  DISCOUNT_VALUES,
  PAYMENT_METHOD_VALUES,
} from "@utils/constants";

const initialState = {
  config: {},
  allCPUs: [],
  allDisks: [],
  allRAMs: [],
  allUplinkInventories: [],
  allOS: [],
  allGPUs: [],
  filteredCPUs: [],
  filteredDisks: [],
  filteredRAMs: [],
  filteredGPUs: [],
  cpu: {
    selectedCPUCompany: null,
    selectedCPU: null,
  },
  disk: {
    premiumDisksOnly: false,
    selectedHDD: {},
    selectedSSD: {},
  },
  ram: {
    eccRAMsOnly: false,
    selectedRAM: null,
  },
  os: {
    selectedOS: null,
    selectedOSVersion: null,
  },
  uplink: {
    selectedUplink: null,
    selectedUplinkQuantity: 0,
    selectedUplinkVariant: null,
  },
  gpu: {
    selectedGPU: null,
  },
  contractType: CONTRACT_TYPE_VALUES.HARDWARE,
  paymentMethod: PAYMENT_METHOD_VALUES.BANK_TRANSFER,
  discount: DISCOUNT_VALUES.NO_DISCOUNT.name,
  contractDuration: CONTRACT_DURATION.ONE_MONTH.value,
};

const configuratorSlice = createSlice({
  name: "configurator",
  initialState,
  reducers: {
    selectCPU: (state, action) => {
      const cpu = action.payload;
      if (
        state.cpu.selectedCPU?.cpu_id &&
        state.cpu.selectedCPU?.cpu_id === cpu.cpu_id
      )
        return;

      state.cpu.selectedCPU = cpu;
      // Refilter disks, rams and gpu
      if (cpu.cpu_id) {
        state.filteredDisks = filterDisksByCPU(
          state.allDisks,
          cpu.cpu_id,
          state.disk.premiumDisksOnly
        );
        state.filteredRAMs = filterRAMsByCPU(
          state.allRAMs,
          cpu.cpu_id,
          state.ram.eccRAMsOnly
        );
      }
      if (cpu.is_gpu_supported) {
        state.filteredGPUs = filterGPUsByCPU(state.allGPUs, cpu.cpu_id);
      } else {
        state.filteredGPUs = [];
        state.gpu.selectedGPU = null;
      }

      // Reset disk selection
      state.disk.selectedHDD = {};
      state.disk.selectedSSD = {};

      // select special offer if active
      if (cpu.special_offer_active) {
        state.discount = DISCOUNT_VALUES.SPECIAL_DISCOUNT.name;
      } else if (state.discount === DISCOUNT_VALUES.SPECIAL_DISCOUNT.name) {
        state.discount = DISCOUNT_VALUES.NO_DISCOUNT.name;
      }
    },
    selectCPUCompany: (state, action) => {
      const company = action.payload;
      const isAlreadySelected = company === state.cpu.selectedCPUCompany;

      state.cpu.selectedCPUCompany = isAlreadySelected ? null : company;
      state.cpu.selectedCPU = null;
      state.filteredCPUs = isAlreadySelected
        ? state.allCPUs
        : filterCPUsByCompany(state.allCPUs, company);
      state.filteredDisks = state.allDisks;
      state.filteredRAMs = state.allRAMs;
    },
    togglePremiumDisksOnly: (state) => {
      state.disk.premiumDisksOnly = !state.disk.premiumDisksOnly;
      state.filteredDisks = filterDisksByCPU(
        state.allDisks,
        state.cpu.selectedCPU.cpu_id,
        state.disk.premiumDisksOnly
      );
      state.disk.selectedHDD = {};
      state.disk.selectedSSD = {};
    },
    toggleECCRAMsOnly: (state) => {
      state.ram.eccRAMsOnly = !state.ram.eccRAMsOnly;
      state.filteredRAMs = filterRAMsByCPU(
        state.allRAMs,
        state.cpu.selectedCPU.cpu_id,
        state.ram.eccRAMsOnly
      );
      state.ram.selectedRAM = null;
    },
    selectRAM: (state, action) => {
      state.ram.selectedRAM = action.payload;
    },
    selectUplink: (state, action) => {
      const { data, quantity, variant } = action.payload;
      if (quantity === 0) {
        state.uplink.selectedUplink = null;
        state.uplink.selectedUplinkQuantity = 0;
        state.uplink.selectedUplinkVariant = null;
        return;
      }

      state.uplink.selectedUplink = data;
      state.uplink.selectedUplinkQuantity = quantity;
      state.uplink.selectedUplinkVariant = variant;
    },
    selectOS: (state, action) => {
      const { data, version } = action.payload;
      const versionIsNone = version === "none";

      state.os.selectedOS = versionIsNone ? null : data;
      state.os.selectedOSVersion = versionIsNone ? null : version;
    },
    selectDisk: (state, action) => {
      const { id, quantity, variant, isHDD, data } = action.payload;
      const collection = isHDD
        ? state.disk.selectedHDD
        : state.disk.selectedSSD;
      const removeAttr = quantity === 0;
      if (removeAttr) {
        delete collection[id];
      } else {
        collection[id] = { quantity, variant, data };
      }
    },
    selectGPU: (state, action) => {
      const selectedGPU = action.payload;
      state.gpu.selectedGPU =
        selectedGPU.gpu_id === state.gpu.selectedGPU?.gpu_id
          ? null
          : selectedGPU;
    },
    setContractType: (state, action) => {
      const contractType = action.payload;
      if (contractType === CONTRACT_TYPE_VALUES.HARDWARE) {
        state.uplink.selectedUplink = null;
        state.uplink.selectedUplinkQuantity = 0;
        state.uplink.selectedUplinkVariant = null;
      }

      state.contractType = contractType;
    },
    setPaymentMethod: (state, action) => {
      const paymentMethod = action.payload;
      state.paymentMethod = paymentMethod;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
    setContractDuration: (state, action) => {
      state.contractDuration = action.payload;
    },
  },
  extraReducers: {
    [getAllCPUs.fulfilled]: (state, action) => {
      state.allCPUs = action.payload.data;
    },
    [getAllDisks.fulfilled]: (state, action) => {
      state.allDisks = action.payload.data;
    },
    [getAllRAMs.fulfilled]: (state, action) => {
      state.allRAMs = action.payload.data;
    },
    [getAllUplinkInventories.fulfilled]: (state, action) => {
      state.allUplinkInventories = jsonParseObjectsArray(action.payload.data, [
        "data_capacity",
      ]);
    },
    [getAllOSs.fulfilled]: (state, action) => {
      state.allOS = jsonParseObjectsArray(action.payload.data, ["os_version"]);
    },
    [getAllGPUs.fulfilled]: (state, action) => {
      state.allGPUs = action.payload.data;
    },
    [getConfig.fulfilled]: (state, action) => {
      const config = action.payload.data;

      state.config = jsonParseFormData(config, [
        "payment_method",
        "contract_type",
        "contract_duration",
        "discount",
      ]);
      state.contractType = config?.contract_type[0]?.value;
      state.contractDuration = config?.contract_duration[0]?.value;
      state.paymentMethod = config?.payment_method[0]?.value;
      state.discount = config?.discount[0]?.value;
    },
  },
});

export const {
  selectCPU,
  selectCPUCompany,
  togglePremiumDisksOnly,
  toggleECCRAMsOnly,
  selectRAM,
  selectUplink,
  selectOS,
  selectDisk,
  selectGPU,
  setContractType,
  setPaymentMethod,
  setDiscount,
  setContractDuration,
} = configuratorSlice.actions;

export default configuratorSlice;
