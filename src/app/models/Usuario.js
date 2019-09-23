import Sequelize, { Model } from "sequelize";

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        matricula: Sequelize.INTEGER,
        password_hash: Sequelize.STRING,
        status: Sequelize.BOOLEAN,
        nome: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Usuario;
