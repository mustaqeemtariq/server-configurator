import { getAuthHeaders } from "@utils/api";
import axios from "axios";

const api = axios.create({
  baseURL: "http://134.255.253.170:5000/api",
  // withCredentials: true,
});

// CPU
export const createCPU = (data) => {
  return api.post("/cpu", data, getAuthHeaders());
};

export const editCPU = (id, data) => {
  return api.patch(`/cpu/${id}`, data, getAuthHeaders());
};

export const deleteCPU = (id) => {
  return api.delete(`/cpu/${id}`, getAuthHeaders());
};

// GPU
export const createGPU = (data) => {
  return api.post("/gpu", data, getAuthHeaders());
};

export const editGPU = (id, data) => {
  return api.patch(`/gpu/${id}`, data, getAuthHeaders());
};

export const deleteGPU = (id) => {
  return api.delete(`/gpu/${id}`, getAuthHeaders());
};

// Disk
export const createDisk = (data) => {
  return api.post("/disk", data, getAuthHeaders());
};

export const editDisk = (id, data) => {
  return api.patch(`/disk/${id}`, data, getAuthHeaders());
};
export const deleteDisk = (id) => {
  return api.delete(`/disk/${id}`, getAuthHeaders())
  .catch(err => err.response)
};
// Relation
export const createRelation = (data) => {
  return api.post("/cpuDiskRelation", data, getAuthHeaders())
  .catch(err => err.response)
};
export const editRelation = (id, data) => {
  return api.patch(`/cpuDiskRelation/${id}`, data, getAuthHeaders());
};
export const deleteRelation = (id) => {
  return api.delete(`/cpuDiskRelation/${id}`, getAuthHeaders());
};
// RAM
export const createRAM = (data) => {
  return api.post("/ram", data, getAuthHeaders());
};

export const editRAM = (id, data) => {
  return api.patch(`/ram/${id}`, data, getAuthHeaders());
};

export const deleteRAM = (id) => {
  return api.delete(`/ram/${id}`, getAuthHeaders());
};

// Uplink
export const createUplink = (data) => {
  return api.post("/uplink", data, getAuthHeaders());
};

export const editUplink = (id, data) => {
  return api.patch(`/uplink/${id}`, data, getAuthHeaders());
};

export const deleteUplink = (id) => {
  return api.delete(`/uplink/${id}`, getAuthHeaders());
};

export const getAllCustomers = () => {
  return axios.get("/customers", getAuthHeaders());
};

export const createCustomer = (data) => {
  return api.post("/register", data, getAuthHeaders());
};

export const deleteCustomer = (email) => {
  return axios.delete(`/customer/${email}`, getAuthHeaders());
};

export const deleteOrder = (id) => {
  return api.delete(`/order/${id}`, getAuthHeaders());
};

// OS
export const createOS = (data) => {
  return api.post("/os", data, getAuthHeaders());
};

export const editOS = (id, data) => {
  return api.patch(`/os/${id}`, data, getAuthHeaders());
};

export const deleteOS = (id) => {
  return api.delete(`/os/${id}`, getAuthHeaders());
};

export const updateConfiguration = (data) => {
  return api.patch("/configuration/3", data, getAuthHeaders());
};

export const createCheckout = (data) => {
  return api.post("/order", data, getAuthHeaders())
};

export const editOrder = (id, data) => {
  const request = {
    ...data,
    contract_duration: parseInt(data.contract_duration)
  }
  return api.patch(`/order/${id}`, request, getAuthHeaders());
};

