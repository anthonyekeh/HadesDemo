const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World. This is a test run for 2024!!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:3000/`);
});
