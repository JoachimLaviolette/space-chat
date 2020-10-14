const socketio = require("socket.io");

socketIOServer = (server) => {
  const io = socketio.listen(server);
  let users = [];
  let chatContent = []; // {user, datetime, message}
  let docsContent = ``;

  // When a user enters the app
  io.on("connection", (socket) => {
    if (!users.find((user) => user.socketId === socket.id)) {
      users.push({ socketId: socket.id });
      // Send the current content to the other chat participants
      io.emit("updateDocs", docsContent);
      // Send the chat content to the other chat participants
      io.emit("updateChat", chatContent);
    }

    // When a user send a message in the chat
    socket.on("registerUser", (pseudo) => {
      // Should always be defined ...
      if (users.find((user) => user.socketId !== socket.id))
        users.push({ socketId: socket.id });

      // Register the chosen pseudo for the socket id
      users.find((user) => user.socketId === socket.id).pseudo = pseudo;
      console.log(`User ${pseudo} now registered!`);
    });

    // When a user send a message in the chat
    // The message must be in the format { pseudo: pseudo, content: message, time: time }
    socket.on("updateChat", (message) => {
      // Update the chat logger
      chatContent.push(message);
      // Send the chat content to the other chat participants
      socket.broadcast.emit("updateChat", chatContent);
      // Send the chat content to the emitter
      socket.emit("updateChat", chatContent);
    });

    // When a user send a message in the docs
    socket.on("updateDocs", (newContent) => {
      docsContent = newContent;
      // Send the updated content to the other chat participants
      socket.broadcast.emit("updateDocs", docsContent);
    });

    // When a user leaves the app
    socket.on(
      "disconnect",
      () => delete users.find((user) => user.socketId === socket.id)
    );
  });
};

module.exports = socketIOServer;
