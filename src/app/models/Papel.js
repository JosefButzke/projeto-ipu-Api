import Sequelize, { Model } from "sequelize";

class Papel extends Model {
  static init(sequelize) {
    super.init(
      {
        PAPE_ID_PAPEL: { type: Sequelize.STRING(50), primaryKey: true },
        PAPE_DS_PAPEL: Sequelize.STRING(100)
      },
      {
        sequelize,
        tableName: "PAPEL",
        freezeTableName: true,
        timestamps: false
      }
    );
  }
}

export default Papel;
