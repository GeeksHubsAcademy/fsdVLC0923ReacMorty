
import axios from 'axios';

export const GetCharacters = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=1`);
}