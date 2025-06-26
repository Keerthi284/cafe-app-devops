const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('🚀 Hello from AWS CI/CD Pipeline running on port 8080!');
=======
  res.send('🚀 Hello from AWS CI/CD Pipeline!');
>>>>>>> 9dff5d7b5091bdf2cec19a830ba0668309fcb169
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
