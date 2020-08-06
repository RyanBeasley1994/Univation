const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    brand:String,
    year:Number,
})

const model = mongoose.model("Cars",schema);

module.exports = model;