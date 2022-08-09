module.exports = function(app, mysql) {
    app.get('/get/areas', (request, response) => {
        mysql.getArea(function(result) {
            response.send(result);
        })
    })



}