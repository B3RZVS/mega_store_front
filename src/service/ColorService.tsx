import axios from "axios";
import { API_ROUTES } from "../Routes";
import { Color } from "../contexts/ColorContext";

const api = axios.create({
    baseURL: API_ROUTES.BASE,
})

export async function getColores(){
        const {data : respuesta} = await api.get(API_ROUTES.GET_COLOR); 
        return respuesta;
}

export async function newColor(color :Color) {
    const {data : respuesta} = await api.post(API_ROUTES.POST_COLOR, color); 
    return respuesta;   
}

export async function putColor(color :Color) {
    const {data : respuesta} = await api.put(API_ROUTES.PUT_COLOR, color); 
    return respuesta;
}

export const deleteColor = async (id: string) => {
    const response = await api.delete(API_ROUTES.DELETE_COLOR(id)); 
    return response.data;
} 