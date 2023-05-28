import axios from "axios";

const Database = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export default Database;