const express = require('express');
const app = new express();
const cors = require('cors');
app.use(new cors());


app.get('/', function (req, res) {

    res.json({messaggio:'Addio mondo!'})
  res.send('Ciao mondo!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
