import { Router } from "express";

import UsuarioController from "./app/controllers/UsuarioController";
import DisciplinaController from "./app/controllers/DisciplinaController";
import ProfessorController from "./app/controllers/ProfessorController";
import Professor_disciplinaController from "./app/controllers/Professor_disciplinaController";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

routes.post("/usuarios", UsuarioController.store);

routes.post("/professores", ProfessorController.store);

routes.get("/disciplinas", DisciplinaController.index);

routes.post("/disciplinas", DisciplinaController.store);

routes.post("/professordisciplina", Professor_disciplinaController.store);

export default routes;

// docker run --name databasepoli -e POSTGRES_PASSWORD=docker -p 5434:5432 -d postgres
