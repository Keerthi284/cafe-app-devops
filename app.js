const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('🚀 Hello from AWS CI/CD Pipeline running on port 8080!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
