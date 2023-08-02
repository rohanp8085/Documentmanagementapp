import axios from "axios"

const API_URL = "/api/user/"

const registerUser = async (userdata) => {
    const response = await axios.post(API_URL + "register ", userdata)
    localStorage.setItem("user", JSON.stringify(response.data))
    // console.log(response.data);
    return response.data;

}

const loginUser = async (userdata) => {
    const response = await axios.post(API_URL + "login", userdata)
    localStorage.setItem("user", JSON.stringify(response.data))
      return response.data;
}

const logout = async () => {
     localStorage.removeItem("user")
}

const authService = {
    registerUser,
    loginUser,
    logout
}

export default authService