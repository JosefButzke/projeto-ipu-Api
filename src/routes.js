import { Router } from "express";
import Papel from "./app/models/Papel";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

routes.get("/papeis", async (req, res) => {
  const papeis = Papel.findAll();
  res.json(papeis);
});

export default routes;

// docker run --name databasepoli -e POSTGRES_PASSWORD=docker -p 5434:5432 -d postgres
