require('dotenv/config');
const express = require('express');

const { Sayed } = process.env;

const app = express();

app.get('/', (_req, res) => {
  if (!Sayed) {
    res.status(500).json({
      error: { message: 'Environment variable Sayed not provided' }
    });
    return;
  }
  res.json({
    data: `Hello from ${Sayed}!`
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('App is listening!');
});
