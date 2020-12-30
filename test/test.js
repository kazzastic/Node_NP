// var request = require('supertest');
// var app = require('../app.js');

// describe('GET /', ()=>{
//     it('respond with hello world', function(done){
//         request(app).get('/posts').expect('hello world', done);
//     });
// });

var request = require('supertest');
var app = require('../app.js');
describe('GET /posts', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/posts').expect('[{"_id":"5fe87c8b08c9de66c4151f4e","title":"this would be the First post","description":"This is going to the local DB","date":"2020-12-27T12:22:35.218Z","__v":0}]', done);
 });
});