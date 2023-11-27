import axios from "../AxiosCustomize";
const loginAPI = (account) => {
    return axios.post("/login", account);
}

export {
    loginAPI
}