import axios from "axios";

jest.setTimeout(10000)
export const getDataFromApi = (url)=>{
    return axios.get(url)
        .then(({data})=>{
            return data;
        });
}