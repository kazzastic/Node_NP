var request = require('supertest');
var app = require('../app.js');
describe('GET /posts', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/posts').expect('[{"_id":"5fe87c8b08c9de66c4151f4e","title":"this would be the First post","description":"This is going to the local DB","date":"2020-12-27T12:22:35.218Z","__v":0},{"_id":"5fec2f8b7a362b27c268e1c1","title":"this would be the Second post","description":"This is going to the Atlas DB","date":"2020-12-30T07:43:07.449Z","__v":0},{"_id":"5fec2f9a7a362b27c268e1c2","title":"this would be the third post","description":"This is going to the Atlas DB","date":"2020-12-30T07:43:22.791Z","__v":0},{"_id":"5fec2fac7a362b27c268e1c3","title":"this would be the fourth post","description":"This is going to the Atlas DB","date":"2020-12-30T07:43:40.323Z","__v":0},{"_id":"5fec2fb47a362b27c268e1c4","title":"this would be the fifth post","description":"This is going to the Atlas DB","date":"2020-12-30T07:43:48.431Z","__v":0},{"_id":"5fec2fb97a362b27c268e1c5","title":"this would be the sixth post","description":"This is going to the Atlas DB","date":"2020-12-30T07:43:53.907Z","__v":0},{"_id":"5fec477c4657cd00188cf96d","title":"this would be the seven post","description":"This is going to the Atlas DB","date":"2020-12-30T09:25:16.426Z","__v":0}]').end(function(err, res){
     if(err){
         return done(err);
     }
     else{
         console.log("CODE RAN SUCCESSFULLY!");
         process.exit(0);
     }
 });
 });
});