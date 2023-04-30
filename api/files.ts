import API from "./config/axios";

export const getFiles = async () => {
    const { data } = await API.get(`/files`);
    console.log(data);
    return data
}