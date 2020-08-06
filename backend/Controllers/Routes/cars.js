
const route = require('express').Router();
const carModel = require('../../Models/carSchema');

route.get('/', (req, res) => {
    carModel.find().then((cars) => {
        if (cars) { res.send(cars) }
        else res.send("no cards");
    }).catch((err) => res.send(err))
})
    .post('/', (req, res) => {
        carModel.create(req.body).then((car) => res.send('created')).catch((err)=>{console.log(err);res.status(404).send()})
    })

module.exports = route;