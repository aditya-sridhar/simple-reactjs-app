'use strict';
const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/health-check',(req,res)=> {
  res.send ("Health check passed");
});
app.get('/bad-health',(req,res)=> {
  res.status(500).send('Health check did not pass');
});
app.set('json spaces', 2);
app.get('/headers', (req, res) => {
  res.status(200).json(req.headers);
});
app.listen(PORT, HOST);
console.log('Running on http://localhost:${port}');
