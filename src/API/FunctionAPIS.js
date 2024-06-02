import axios from 'axios';

export function Obtener(URL) {
    return new Promise((resolve, reject) => {
        axios.get(URL)
            .then((resp) => {
                resolve({ PeticionGet: resp.data });
            })
            .catch((error) => {
                reject(error);
            });
    });
}
