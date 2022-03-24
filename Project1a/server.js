const express = require('express');
const app = express();
const port = 5309;
const path = require('path');

app.get('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Listening on port ${port} 🚢`);
});
