const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("welcome", (message) => {
    console.log(message.toString());
  });
  socket.emit("welcome-client", "hello client");
});

server.listen(3000, () => console.log("run on port http://localhost:3000"));
