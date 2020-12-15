const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postsRoute = require('./routes/post');

app.use('/posts', postsRoute);

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    ()=> console.log('connected to DB!'));

app.listen(3000, ()=>console.log("Listening at 3000..."));