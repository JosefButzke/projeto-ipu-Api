import { Router } from "express";
import Papel from "./app/models/Papel";
import Professor from "./app/models/Professor";
import ProfessorDisciplina from "./app/models/ProfessorDisciplina";
import Usuario from "./app/models/Usuario";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

routes.get("/papeis", async (req, res) => {
  const papeis = await Papel.findAll();
  return res.json(papeis);
});

routes.get("/usuario", async (req, res) => {
  const professores = await Usuario.findAll();
  return res.json(professores);
});

export default routes;

// docker run --name databasepoli -e POSTGRES_PASSWORD=docker -p 5434:5432 -d postgres
