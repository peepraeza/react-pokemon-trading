import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:8082/api/v1/box/`
})


export async function getLanding() {
    return new Promise((resolve, reject) => {
        api.get('/landing').then(res => {
            console.log('test ', res.data)
            resolve(res.data)
        })
    });
}

export async function getCardDetails(cardId) {
    return new Promise((resolve, reject) => {
        api.get('/landing').then(res => {
            console.log('test ', res.data)
            resolve(res.data)
        })
    });

}
