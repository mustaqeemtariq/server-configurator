const axios = require('axios');

const api = axios.create({
    baseURL : 'http://134.255.253.170:5000/api'
});

const getAllCPUs = async () => {
    try{
        const response = await api.get('/cpus');
        // console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log('Error fetching the cpu data',error);
        return null;
    }
}

const getAllOSs = async () => {
    try{
        const response = await api.get('/os');
        // console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log('Error fetching the cpu data',error);
        return null;
    }
}

const getAllUplinkInventories = async() => {
    try{
        const response = await api.get('/uplinks');
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log('Error fetching the cpu data',error);
        return null;
    }
}

const getSpecificCpuRam = async(id) => {
    try{
        const response = await api.get('/rams');
        const filteredRams = response.data.filter((item) => (item.cpu_id === id) && (item.is_ECC === false));
        console.log(filteredRams);
        return filteredRams;
    }
    catch(error){
        console.log('Error fetching the data ',error);
        return null;
    }
}

const getCpuDataByName = async(id) => {
    try{
        const response = await api.get('/cpus');
        const filterdResponse = response.data.filter((item) => item.company === id);
        // console.log(filterdResponse);
        return filterdResponse;
    }
    catch(error){
        console.log('Error in fecthing the data',error);
        return null;
    }
}

const getECCRamData = async(id) => {
    try{
        const response = await api.get('/rams');
        const filteredRams = response.data.filter((item) => (item.cpu_id === id) && (item.is_ECC === true))
        console.log(filteredRams);
        return filteredRams;
    }
    catch(error){
        console.log('Error in fetching the data',error);
        return null;
    }
}

const getAllDisk = async(id) => {
    try{
        const response = await api.get('/disks');
        const filteredData = response.data.filter((item) => item.cpu_id === id);
        // console.log(filteredData);
        return filteredData;
    }
    catch(error){
        console.log('Error in fetching the data ',error);
        return null;
    }
}

const getPremiumDisk = async(id) => {
    try{
        const response = await api.get('/disks');
        const filteredData = response.data.filter((item) => (item.cpu_id === id) && (item.is_premium === true));
        console.log(filteredData);
        return filteredData;
    }
    catch(error){
        console.log('Error in fetching the data ',error);
    }
}

module.exports = {
    getAllCPUs,
    getAllOSs,
    getAllUplinkInventories,
    getSpecificCpuRam,
    getCpuDataByName,
    getECCRamData,
    getAllDisk,
    getPremiumDisk
}
