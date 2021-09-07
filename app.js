const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('hello')
});

app.listen(5999, () => {
  console.log("[dns]Listening ... ");
  require('./mongo_connection');
});
