import express from 'express';
import http from 'http';
import { applyMiddleware } from "./utils";
import middleware from "./middleware";


const app: express.Application = express();
applyMiddleware(middleware, app);

const server = http.createServer(app);
const { PORT = 3000 } = process.env;

app.use('/', (req, res) => {
    res.send('hello');
});


server.listen(PORT, () =>
    console.log('Server is running http://localhost:' + PORT)

);