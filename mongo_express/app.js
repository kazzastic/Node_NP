const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postsRoute = require('./routes/post');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/posts', postsRoute);

mongoose.connect(process.env.DB_LOCAL,
    { useNewUrlParser: true }, 
    ()=> console.log('connected to DB!'));

app.listen(3000, ()=>console.log("Listening at 3000..."));