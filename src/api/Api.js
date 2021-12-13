import axios from "axios";

const BASE_URL = "http://localhost:5000/animal"

const http = axios.create({
    baseURL: "http://localhost:5000/animal",
    headers: {
        'Content-type': 'application-json'
    }
});
export const getAnimal = async (id) => {
    const rawResponse = await http.get(`${BASE_URL}/${id}`);
    return rawResponse.data
}
export const getAnimalList = async (weight = '', title = '', price ='') => {
    const rawResponse = await axios.get(`http://localhost:5000/animal?weight=${weight}&title=${title}&price=${price}`)
    return rawResponse.data
}