import axios from "axios"
import {base_url} from "../../utils/data_url"
import {config} from "../../utils/axiosConfig"

const register = async(userData)=>{
    const respone = await axios.post(`${base_url}user/register`,userData)
    if(respone.data){
        return respone.data;
    }
}

const login = async(userData) =>{
    const respone = await axios.post(`${base_url}user/login`, userData, config)
    if(respone.data){
        return respone.data
    }
}

export const authService ={
    register,
    login
}