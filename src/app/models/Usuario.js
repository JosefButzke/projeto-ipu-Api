import Sequelize, { Model } from "sequelize";

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        matricula: Sequelize.INTEGER,
        password_hash: Sequelize.STRING,
        status: Sequelize.BOOLEAN
      },
      {
        sequelize
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Papel, {
      foreignKey: "papel"
    });
  }
}

export default Usuario;
