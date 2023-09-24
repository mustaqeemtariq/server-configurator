import { getAuthHeaders } from "@utils/api";
import axios from "axios";

axios.defaults.baseURL = "http://134.255.253.170:5000/api";

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
