import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio';
import services from './services/index.js';

const app = feathers();

// Set up NeDB
app.set('nedb', './data');

// Set up Socket.io
app.configure(socketio());

// Set up services
app.configure(services);

// Event listeners
app.on('connection', connection => {
  console.log('Client connected');
  
  connection.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

export default app;