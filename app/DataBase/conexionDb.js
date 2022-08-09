const Sequelize = require('sequelize');
const sequelize = new Sequelize("bdlovecraft", "root", "sasa", {
    host: "localhost",
    dialect: "mysql",
    port: 3307
})

module.exports = sequelize;