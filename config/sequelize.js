const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('DB connection has been established successfully.');
        
        await sequelize.sync({ force: true }); // should remove option in production
        
        // we still should define associations
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
        // We still should handle this
    }
}
connectDB();
module.exports = {
    sequelize: sequelize,
};