const sequelize = require('./conexionDb');
const Area = require('./Tablas/Area');
init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexion establecida exitosamente con mysql");
    }).catch(err => {
        console.error("Conexion no establecida", err);
    })
}

getArea = function(callback) {
    Area.findAll().then(area => callback(area));
}

module.exports.init = init;

module.exports.getArea = getArea;