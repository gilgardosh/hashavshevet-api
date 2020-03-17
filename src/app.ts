import express from "express";
import http from "http";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import routes from "./services";
import errorHandlers from "./middleware/errorHandlers";

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const app: express.Application = express();
applyMiddleware(middleware, app);
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app);

const server = http.createServer(app);
const { PORT = 3000 } = process.env;

server.listen(PORT, () =>
  console.log("Server is running http://localhost:" + PORT)
);
