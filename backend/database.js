
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('c1pmb', 'root', 'wcl@2065@GOAL', {
  host: 'localhost',
  dialect: 'mariadb', // or 'mysql' for MySQL
});

export default sequelize;
