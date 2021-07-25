import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:8082/api/v1/card/`
})

export async function getCardDetails(cardId) {
    return new Promise((resolve, reject) => {
        api.get(`/${cardId}`).then(res => {
            resolve(res.data)
        })
    });

}
