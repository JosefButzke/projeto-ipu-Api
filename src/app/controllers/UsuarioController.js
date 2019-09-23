import Usuario from "../models/Usuario";

class UsuarioController {
  async store(req, res) {
    const usuario = await Usuario.create(req.body);
    return res.json(usuario);
  }
}

export default new UsuarioController();
