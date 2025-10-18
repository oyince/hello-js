const express = require('express');
const app = express();
const PORT = process.env.PORT;
const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};    

app.use(requestLogger);
app.use(express.json());


app.get('/', (req, res) => {res.send('My Week 2 API!')});

app.post('/user', (req, res) => {
  const { name } = req.body;
  if (!name || !req.body.email) {
    return res.status(400).send({ error: 'Missing name or email' });
  }
  res.send(`Hello, ${name}!`);
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ${userId} profile`);
});

app.listen(3000, () => console.log('API live on port 3000'));