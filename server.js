require('dotenv').config();
const db = require('./db');
const app = require('./app');

const port = process.env.PORT || 5000;

startApp(app,db);

async function startApp(app, db) {
    try {
        await db.authenticate();
        const define_associations = require('./db/models/associations');
        define_associations();
        // await db.sync({ force: true }); // should remove option in production
        await db.sync();
        app.listen(port, () => {
            console.log(`server listening on port ${port}`);
        });
    } catch (error) {
        console.error(error);
        db.close();
        process.exit(1);
    }
}
