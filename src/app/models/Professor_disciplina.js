import { Model } from "sequelize";

class Professor_disciplina extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
        tableName: "professor_disciplina"
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Professor, {
      foreignKey: "id_usuario"
    });
    this.belongsTo(models.Disciplina, { foreignKey: "id_disciplina" });
  }
}

export default Professor_disciplina;
