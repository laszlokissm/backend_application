const suggestVehiclesMW = require("../middlewares/suggestVehiclesMiddleware");
const createVehiclesMW = require("../middlewares/createVehicleMiddleware");
const getVehiclesMW = require("../middlewares/getVehiclesMiddleware");

function subscribeToRoutes(app) {
   app.post('/api/vehicles', createVehiclesMW());
   app.get('/api/suggest', getVehiclesMW(), suggestVehiclesMW());

   app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ 
        error: 'Internal Server Error',
        message: err.message 
    });
});
}

module.exports = subscribeToRoutes;