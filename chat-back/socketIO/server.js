const socketio = require("socket.io");

socketIOServer = (server) => {
  const io = socketio.listen(server);
  let users = []; // { socketId, pseudo, roomId }
  let rooms = []; // { roomId, history: { chat: [ { user, datetime, content } ], docs: [ { user, datetime, content } ] }

  // When a user enters the app
  io.on("connection", (socket) => {
    const getUser = (socketId) =>
      users.find((user) => user.socketId === socketId);

    const getRoom = (roomId) => rooms.find((room) => room.roomId === roomId);

    const joinRoom = (socket, roomId) => {
      const user = getUser(socket.id);
      // First check if the user is already part of a room
      // If yes, remove it
      if (user) if (user.roomId) socket.leave(user.roomId);
      // Make the user join the new room
      socket.join(roomId);
      user.roomId = roomId;
      socket.emit("updateRoom", roomId);
    };

    if (!getUser(socket.id)) users.push({ socketId: socket.id });

    // When a user send a message in the chat
    socket.on("registerUser", (pseudo) => {
      // Should always be defined ...
      if (!getUser(socket.id)) users.push({ socketId: socket.id });

      // Register the chosen pseudo for the socket id
      getUser(socket.id).pseudo = pseudo;
      console.log(`User ${pseudo} now registered (socketID => ${socket.id})`);
    });

    // When a user asks for the exisiting rooms
    socket.on("fetchRooms", () => socket.emit("fetchRooms", rooms));

    // When a user asks for a specific room
    socket.on("fetchRoom", (roomId) =>
      socket.emit("fetchRoom", getRoom(roomId))
    );

    // When a user creates a room
    socket.on("createRoom", (roomId) => {
      rooms.push({ roomId, history: { chat: [], docs: [] } });
      socket.broadcast.emit("fetchRooms", rooms);
      joinRoom(socket, roomId);
    });

    // When a user joins a room
    socket.on("updateRoom", (roomId) => joinRoom(socket, roomId));

    // When a user sends a message in the chat of a room
    // The message must be in the format { pseudo, content, time }
    socket.on("updateChat", (message, roomId) => {
      const chatHistory = getRoom(roomId).history.chat;
      // Update the chat history of the room
      chatHistory.push(message);
      // Send the chat content to the chat participants
      io.to(roomId).emit("updateChat", chatHistory);
    });

    // When a user update the docs content of a room
    // The docs content must be in the format { pseudo, content, time }
    socket.on("updateDocs", (newContent, roomId) => {
      const docsHistory = getRoom(roomId).history.docs;
      // Update the docs history of the room
      docsHistory.push(newContent);
      // Send the updated content to the other chat participants
      socket.to(roomId).emit("updateDocs", docsHistory);
    });

    // When a user leaves the app
    socket.on("disconnect", () => delete getUser(socket.id));
  });
};

module.exports = socketIOServer;
