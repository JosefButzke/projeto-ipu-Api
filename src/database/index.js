import Sequelize from "sequelize";

import Papel from "../app/models/Papel";

import DatabaseConfig from "../config/database";

const models = [Papel];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(DatabaseConfig);

    models.map(model => model.init(this.connection));
  }
}
export default new Database();
