const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello there, this is the home page!');
});

app.get('/product', (req, res) => {
  res.send('This is a Product Page!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.listen(3000, () => {
  console.log('Running on PORT 3000');
});
