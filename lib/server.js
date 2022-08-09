const express = require('express');
const mysql = require('../app/DataBase/mysql');
const app = express();
const port = 3000;

app.use(express.json());


app.listen(port, () => {
    console.log(`Servidor listo y escuchando en el puerto: ${port}`);
    mysql.init();

})


require('../app/Routes/areaRoutes')(app, mysql);