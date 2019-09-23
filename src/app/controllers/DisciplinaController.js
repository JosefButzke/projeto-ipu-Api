import Disciplina from "../models/Disciplina";

class DisciplinaController {
  async index(req, res) {
    const disciplinas = await Disciplina.findAll({
      attributes: ["id", "nome"]
    });
    return res.json(disciplinas);
  }

  async store(req, res) {
    const disciplina = await Disciplina.create(req.body);
    return res.json(disciplina);
  }
}

export default new DisciplinaController();
