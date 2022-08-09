const { Sequelize } = require('sequelize');
const sequelize = require('../conexionDb');

const Area = sequelize.define('area', {
    idArea: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false,
})


module.exports = Area;