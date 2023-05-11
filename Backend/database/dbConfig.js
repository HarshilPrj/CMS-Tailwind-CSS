require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSERNAME,
    process.env.DBPASSWORD,
    {
        host: process.env.HOST,
        dialect: "postgres",
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been Established Successfully.");
    })
    .catch((error) => {
        console.error("Unable to Connect to the Database:", error);
    });

module.exports = sequelize;
