import Usuario from "../models/Usuario";

class UsuarioController {
  async store(req, res) {
    if (req.body.papel == null) {
      return res.json("Insira o papel");
    }
    const usuario = await Usuario.create(req.body);
    return res.json(usuario);
  }
}

export default new UsuarioController();
