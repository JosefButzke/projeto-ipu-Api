module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("professor_disciplina", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: { model: "usuarios", key: "id" },
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      id_disciplina: {
        type: Sequelize.INTEGER,
        references: { model: "disciplinas", key: "id" },
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("professor_disciplina");
  }
};
