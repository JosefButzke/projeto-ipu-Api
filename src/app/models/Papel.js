import Sequelize, { Model } from "sequelize";

class Papel extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING
      },
      { sequelize, tableName: "PAPEL", freezeTableName: true }
    );
  }
}

export default Papel;
