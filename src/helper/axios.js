import axios from 'axios'
 const axiosHelper = async (method, params) => {
    try {
        switch (method) {
            case 'post':
                return axios.post(params);
            case 'put':
                return axios.put(params);
            case 'delete':
                return axios.delete(params);
            default:
                return axios.get(params);
        }
    } catch (error) {
        throw error
    }
}
export default axiosHelper;