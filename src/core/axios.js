import Axios from "axios";
import config from "../config.json"

const instance = Axios.create({
	// baseURL: 'https://api.github.com/search/',
    // withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET",
    	'Authorization' : `token ${config.token}`,
        'X-Requested-With': 'XMLHttpRequest'
    }
})

// instance.interceptors.request.use((config) => {
//     if (typeof window !== "undefined" ) {
//         headers.Authorization = `token ${config.token}`
//     }
//     return config;
// })

export default instance;