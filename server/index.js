import app from './app.js';

const port = 3030;

app.listen(port).then(() => {
  console.log(`Feathers server listening on port ${port}`);
});