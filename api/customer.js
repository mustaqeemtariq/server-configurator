import { getAuthHeaders } from "@utils/api";
import axios from "axios";

axios.defaults.baseURL = "http://134.255.253.170:5000/api";

export const getCustomerCPUs = () => {
  return axios.get("/public/cpus", getAuthHeaders());
};

export const getCustomerGPUs = () => {
  return axios.get("/public/gpus", getAuthHeaders());
};

export const getCustomerDisks = () => {
  return axios.get("/public/disks", getAuthHeaders());
};

export const getCustomerRams  = () => {
  return axios.get("/public/rams", getAuthHeaders());
};

export const getCustomerUPlinks = () => {
  return axios.get("/public/uplinks", getAuthHeaders());
};

export const getCustomerOS = () => {
  return axios.get("/public/os", getAuthHeaders());
};

export const getCustomerOrders = (id) => {
  return axios.get(`/public/orders/${id}`, getAuthHeaders());
};
