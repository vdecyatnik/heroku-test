// npm install express
const express = require('express');
const app = express();

var PORT = process.env.PORT || 3001;

app.get('/', (req, res)=> {
  res.send('Hello World');
}) 

app.get('/test', function (req, res) {
    res.send('Hello Test World');

});

app.listen(3000,()=>{
 console.log("starting...");
});