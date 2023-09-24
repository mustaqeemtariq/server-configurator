import { getAuthHeaders } from "@utils/api";
import axios from "axios";

axios.defaults.baseURL = "https://active-servers.com/calc-api";

export const getAllCPUs = () => {
  return axios.get("/cpus");
};

export const getAllGPUs = () => {
  return axios.get("/gpus");
};

export const getAllDisks = () => {
  return axios.get("/disks");
};
export const getAllRelations = () => {
  return axios.get("/cpuDiskRelations");
};
export const getAllRAMs = () => {
  return axios.get("/rams");
};

export const getAllUplinks = () => {
  return axios.get("/uplinks");
};

export const getAllOS = () => {
  return axios.get("/os");
};

export const getConfiguration = () => {
  return axios.get("/configuration/3");
};

export const getAllOrders = () => {
  return axios.get("/orders", getAuthHeaders());
};
