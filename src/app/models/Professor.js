import Sequelize, { Model } from "sequelize";

class Professor extends Model {
  static init(sequelize) {
    super.init(
      {
        USUA_ID_USUARIO: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: "PROFESSOR",
        freezeTableName: true,
        timestamps: false
      }
    );
  }
}

export default Professor;
