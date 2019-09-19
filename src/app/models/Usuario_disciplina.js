import Sequelize, { Model } from "sequelize";

class Usuario_disciplina extends Model {
  static init(sequelize) {
    super.init(
      {
        id_usuario: Sequelize.INTEGER,
        id_disciplina: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: "PAPEL",
        freezeTableName: true,
        timestamps: false
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: "id_usuraio",
      as: "usuarioId"
    });
    this.belongsTo(models.Disciplina, {
      foreignKey: "id_disciplina",
      as: "disciplinaId"
    });
  }
}

export default Usuario_disciplina;
