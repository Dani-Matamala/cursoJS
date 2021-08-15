// const math = require('./math');

// console.log(math.add(3, 2));
// console.log(math.substract(3, 2));
// console.log(math.divide(3, 2));
// console.log(math.multiply(3, 2));

const express = require('express');
const colors = require('colors');

const server = express();

server.get ('/', (req, res)=>{
    res.send('<h1>Hola mundo con Express y nodeJS</h1>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server on port 3000'.red);
});