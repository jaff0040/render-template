require('dotenv/config');
const express = require('express');

const { STUDENT_NAME } = process.env;

const app = express();

app.get('/', (_req, res) => {
  if (!STUDENT_NAME) {
    res.status(500).json({
      error: { message: 'Environment variable STUDENT_NAME not provided' }
    });
    return;
  }
  res.json({
    data: `Hello from ${STUDENT_NAME}!`
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('App is listening!');
});
