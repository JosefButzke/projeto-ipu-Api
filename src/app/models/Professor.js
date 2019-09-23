import { Model } from "sequelize";

class Professor extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
        tableName: "professores"
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: "id_usuario" });
  }
}

export default Professor;
