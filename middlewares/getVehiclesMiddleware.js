const Vehicle = require("../models/vehicle");

module.exports = function () {
    return async (req, res, next) => {
        try {
            const vehicles = await Vehicle.find({});

            res.locals.vehicles = vehicles;
            next();
        } catch (error) {
            next(error);
        }
    };
}