const { Sequelize } = require("sequelize");
const { DATABASE_URL } = require("../config");

exports.sequelize = new Sequelize(DATABASE_URL, {
    logging: false,
    timezone: "Africa/Cairo",
});

exports.connectDB = async (sequelize) => {
    await sequelize.authenticate();
    // await sequelize.drop(); // should remove in production
    const define_associations = require("./associations");
    define_associations();
    await sequelize.sync({ force: true }); // should remove option in production
    // await sequelize.sync();
};

exports.closeDB = async (sequelize) => {
    return sequelize.drop();
};