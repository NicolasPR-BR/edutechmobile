import axios from 'axios';

export const api = axios.create({baseURL:'http://localhost:5000'})

export const busca = async(url, setDado) =>{
    const res = await api.get(url)
    console.log(res.data);
    setDado(res.data)
}