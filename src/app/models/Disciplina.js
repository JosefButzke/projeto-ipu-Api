import Sequelize, { Model } from "sequelize";

class Disciplina extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default Disciplina;
