require("dotenv").config();
const app = require("./app");

const port = process.env.PORT || 5000;

init(app);

async function init(app) {
    const { connectDB, sequelize, closeDB } = require("./db");
    try {
        await connectDB(sequelize);
        app.listen(port, () => {
            console.log(`server listening on port ${port}`);
        });
    } catch (error) {
        console.error(error);
        await closeDB(sequelize);
        process.exit(1);
    }
}