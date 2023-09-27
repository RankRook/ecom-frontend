import axios from "axios";
import { base_url } from "../../utils/data_url";

const getProducts = async(data)=>{
    const respone = await axios.get(`${base_url}product`)
    if(respone.data){
        return respone.data
    }
}

export const productService ={
    getProducts
}