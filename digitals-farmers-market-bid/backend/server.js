import express from "express";
// Trigger restart 3
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*", // In production, replace with frontend URL
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// Socket.io Connection
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("join_auction", (room) => {
    socket.join(room);
    console.log(`User joined auction: ${room}`);
  });

  socket.on("place_bid", (data) => {
    // Broadcast bid to everyone in the room
    io.to(data.productId).emit("new_bid", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

httpServer.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
