import "dotenv/config";
import express from "express";
import { Server } from "socket.io";
import http from "http";

import { router } from "./routes";
import cors from "cors";

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log(`Usuário conectado no socket`);
});

app.use(express.json());

app.use(router);

app.get("/", (request, response) => {
  response.json(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get("/sigin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

export { serverHttp, io };
