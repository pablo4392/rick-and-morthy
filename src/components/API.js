import axios from 'axios'

const API = () => {
    const Url = 'https://rickandmortyapi.com/api/location';
    const response = axios(Url)
    return response
}

export default API