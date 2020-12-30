const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postsRoute = require('./routes/post');
const bodyParser = require('body-parser');

var DB_LOCAL = 'mongodb://localhost:27017';

app.use(bodyParser.json());
app.use('/posts', postsRoute);

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    ()=> console.log('connected to DB!'));

//app.listen(8082, ()=>console.log("Listening at 5000..."));
port = process.env.PORT || 80;
console.log("Listening at "+process.env.PORT); 
module.exports = app.listen(port);