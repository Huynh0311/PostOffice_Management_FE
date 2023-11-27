import axios from "../AxiosCustomize";
const registerAPI = (account) => {
    return axios.post("/register", account);
}

export {
    registerAPI
}