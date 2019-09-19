import { Router } from "express";

import PapelController from "./app/controllers/PapelController";
import UsuarioController from "./app/controllers/UsuarioController";
import DisciplinaController from "./app/controllers/DisciplinaController";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

routes.post("/papeis", PapelController.store);

routes.post("/usuarios", UsuarioController.store);

routes.post("/disciplinas", DisciplinaController.store);

export default routes;

// docker run --name databasepoli -e POSTGRES_PASSWORD=docker -p 5434:5432 -d postgres
