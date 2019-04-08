const express = require('express');

const app = express();
const port = process.env.DUMMY_APP_PORT || 3000;

app.use((req, res, next) => {
  console.log(`request made wtih url: ${req.url}
  and method: ${req.method}`);
  next();
})

app.get('/dummy', (req, res, next) => {
  console.log('gettting dummy data');
  res.json([
    {
      name: 'dumb',
      iq: 3,
      description: 'dumb data'
    },
    {
      name: 'dumber',
      iq: 2,
      description: 'dumber data'
    }
  ])
})

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
})