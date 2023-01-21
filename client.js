const socket = io("http://localhost:3000");

socket.on("connect", (data) => {
  socket.emit("welcome", "hello server");
  socket.on("welcome-client", (data) => {
    console.log(data.toString());
  });
});
