const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
    benchmark: true,
});

module.exports = sequelize;