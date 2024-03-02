const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

function server (){
  const server = express();
  server.set("port", 3002);
  server.set("hostname", "localhost");
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cors());

  const hostname = server.get("hostname");
  const port = server.get("port");

  server.listen(port, () => {
    console.log(`service listening on - http://${hostname}:${port}`);
  });
};

module.exports = server

