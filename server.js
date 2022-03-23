const express = require('express');
const app = express();
const PORT = 5309;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}! 👌`);
});

app.get('/', (req, res) => {
  res.send('Hello, you!');
});
app.post('/', (req, res) => {
  res.send(`Got a POST request 📫`);
});
