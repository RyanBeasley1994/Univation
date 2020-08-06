require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

const PORT = process.env.PORT || 3500;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to mongoDB")
})

app.use('/cars', require('./Controllers/Routes/cars'))


app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})