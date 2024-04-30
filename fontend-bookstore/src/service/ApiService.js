import axios from 'axios';

const base_url = "http://localhost:8081";
const jwtToken = sessionStorage.getItem("jwtToken");
axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;

export const getRequest = async (path) => {

    try {
        const response = await axios.get(base_url + path);
        return response;

    } catch (error) {
        if(error.response.status === 401) {
            sessionStorage.removeItem("jwtToken");
            sessionStorage.removeItem("email");
            window.location.href = "/login";
        }
    }
}

export const postRequest = async (path,data) => {

    try {
        const response = await axios.post(base_url + path,data);
        return response;

    } catch (error) {
        if(error.response.status === 401) {
            sessionStorage.removeItem("jwtToken");
            sessionStorage.removeItem("email");
            window.location.href = "/login";
        }
    }
}


