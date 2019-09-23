import ProfessorDisciplina from "../models/Professor_disciplina";

class ProfessorDisciplinaController {
  async store(req, res) {
    const { id_usuario, id_disciplina } = req.body;
    const professorDisciplina = await ProfessorDisciplina.create(req.body);
    return res.json(professorDisciplina);
  }
}

export default new ProfessorDisciplinaController();
