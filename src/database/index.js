import Sequelize from "sequelize";

import DatabaseConfig from "../config/database";

import Usuario from "../app/models/Usuario";
import Disciplina from "../app/models/Disciplina";
import Papel from "../app/models/Papel";
import UsuarioDisciplina from "../app/models/Usuario_disciplina";

const models = [Usuario, Disciplina, UsuarioDisciplina, Papel];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(DatabaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}
export default new Database();
