import Disciplina from "../models/Disciplina";

class DisciplinaController {
  async store(req, res) {
    const disciplina = await Disciplina.create(req.body);
    return res.json(disciplina);
  }
}

export default new DisciplinaController();
