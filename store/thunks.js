import { getConfiguration } from "@api/public";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "http://134.255.253.170:5000/api",
});

export const getAllCPUs = createAsyncThunk(
  "configurator/getAllCPUs",
  async () => {
    return await api.get("/cpus");
  }
);

export const getAllDisks = createAsyncThunk(
  "configurator/getAllDisks",
  async () => {
    return await api.get("/disks");
  }
);

export const getAllRAMs = createAsyncThunk(
  "configurator/getAllRAMs",
  async () => {
    return await api.get("/rams");
  }
);

export const getAllUplinkInventories = createAsyncThunk(
  "configurator/getAllUplinkInventories",
  async () => {
    return await api.get("uplinks");
  }
);

export const getAllOSs = createAsyncThunk(
  "configurator/getAllOSs",
  async () => {
    return await api.get("/os");
  }
);

export const getAllGPUs = createAsyncThunk(
  "configurator/getAllGPUs",
  async () => {
    return await api.get("/gpus");
  }
);

export const getConfig = createAsyncThunk(
  "configurator/getConfig",
  async () => {
    return await getConfiguration();
  }
);

export const filterCPUsByCompany = (allCPUs, company) => {
  return allCPUs.filter((cpu) => cpu.company === company);
};

export const filterRAMsByCPU = (allRAMs, cpuID, isECC) => {
  return allRAMs.filter((ram) => ram.cpu_id === cpuID);
};

export const filterDisksByCPU = (allDisks, cpuID, premiumDisksOnly) => {
  const filterMethod = premiumDisksOnly
    ? (disk) => disk.cpu_id === cpuID && disk.is_premium === true
    : (disk) => disk.cpu_id === cpuID;
  return allDisks.filter(filterMethod);
};

export const filterGPUsByCPU = (allGPUs, cpuID) => {
  return allGPUs.filter((gpu) => gpu.cpu_id === cpuID);
};
