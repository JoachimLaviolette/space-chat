const express = require("express");
const { port } = require("./config");
const socketIOServer = require("./socketIO/server");

const app = express();
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
const server = require("http").Server(app);

socketIOServer(server);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
