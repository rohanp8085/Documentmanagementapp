import axios from "axios"


const API_URL = "api/document/"


const create = async (userdata, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, userdata, config)
    // console.log(userdata , token);
    return response.data;
}

const getall = async(token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL , config)
    return response.data
}
const DocumentService = {
    create,
    getall
}

export default DocumentService