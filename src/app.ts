import express from 'express';
import http from 'http';
import { applyMiddleware, applyRoutes } from "./utils";
import routes from "./services";
import middleware from "./middleware";


const app: express.Application = express();
applyMiddleware(middleware, app);
applyRoutes(routes, app);

const server = http.createServer(app);
const { PORT = 3000 } = process.env;

server.listen(PORT, () =>
    console.log('Server is running http://localhost:' + PORT)

);