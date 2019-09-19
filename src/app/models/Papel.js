import Sequelize, { Model } from "sequelize";

class Papel extends Model {
  static init(sequelize) {
    super.init(
      {
        papel: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "papeis"
      }
    );
    return this;
  }
}

export default Papel;
