import Professor from "../models/Professor";

class ProfessorController {
  async store(req, res) {
    const professor = await Professor.create(req.body);
    return res.json(professor);
  }
}

export default new ProfessorController();
