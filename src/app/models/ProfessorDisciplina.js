import Sequelize, { Model } from "sequelize";

class ProfessorDisciplina extends Model {
  static init(sequelize) {
    super.init(
      {
        USUA_ID_USUARIO: Sequelize.INTEGER,
        DISC_ID_DISCIPLINA: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: "PROFESSOR_DISCIPLINA",
        freezeTableName: true,
        timestamps: false
      }
    );
  }
}

export default ProfessorDisciplina;
