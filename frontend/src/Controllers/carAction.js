const axios = require('axios')
const qs = require('querystring');

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}
const url = "http://localhost:3500/cars/"

export function getCars(callback) {
    axios.get(url)
        .then((result) => {
            callback(result.data);
        })
        .catch((err) => {
            console.log(err);
        })
}
export function createCar(car, callback) {
    console.log('Working')
    axios.post(url, qs.stringify(car), config)
        .then((result) => {
            callback(true);
        })
        .catch((err) => {
            callback(false);
        })
}