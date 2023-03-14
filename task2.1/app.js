const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('/public/index.html');
});

app.listen(port, () => console.log(`Server running on port ${port}`));