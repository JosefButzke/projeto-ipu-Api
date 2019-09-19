import Papel from "../models/Papel";

class PapelController {
  async store(req, res) {
    const papel = await Papel.create(req.body);
    return res.json(papel);
  }
}

export default new PapelController();
