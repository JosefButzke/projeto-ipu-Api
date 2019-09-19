import Sequelize, { Model } from "sequelize";

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        USUA_IS_USUARIO: { type: Sequelize.INTEGER, primaryKey: true },
        USUA_NM_USUARIO: Sequelize.STRING(200),
        USUA_CD_MATRICULA: Sequelize.INTEGER,
        USUA_TX_SENHA: Sequelize.STRING(100),
        USUA_DT_CRIACAO: Sequelize.DATE,
        USUA_IN_ATIVO: Sequelize.TINYINT,
        USUA_TX_IMAGEM: Sequelize.TEXT("long")
      },
      {
        sequelize,
        tableName: "USUARIO",
        freezeTableName: true,
        timestamps: false
      }
    );
  }
}

export default Usuario;
