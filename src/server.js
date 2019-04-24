import path from 'path';
import express from 'express';

const app = express();
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8080;

app.use(express.static(publicPath));

app.get('*', (request, response) => {
  response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port);
