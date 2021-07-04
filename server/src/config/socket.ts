import http from 'http';
import { Server } from 'socket.io';

export default function socketConfig(server: http.Server) {
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
}
