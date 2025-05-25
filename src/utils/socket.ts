import { io, Socket } from "socket.io-client";

const BASE_URL = process.env.NEXT_PUBLIC_SOCKET_URL || "http://10.0.10.79:5000";

let socket: Socket | null = null;

// Connects socket
export const connectSocket = (id: string) => {
  if (!socket) {
    socket = io(BASE_URL, {
      query: { id },
    });

    // console.log("Socket connected", socket);
  }
};

// Disconnects socket
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
    console.log("Socket disconnected");
  }
};

// Returns the active socket instance
export const getSocket = (): Socket | null => {
  return socket;
};