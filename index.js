const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const socket = require("socket.io");

const app = express();

app.use(bodyParser.json());



const PORT = 1128;

app.listen(process.env.PORT || PORT, () => {
  console.log(`listening on port ${PORT}`);
});