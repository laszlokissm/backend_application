const Vehicle = require("../models/vehicle.js");
const suggestVehicle = require('../utils/suggestVehicles.js');

module.exports = function () {
    return async (req, res, next) => {
        try {
            const passengers = parseInt(req.query.passengers, 10);
            const distance = parseFloat(req.query.distance);

            if (!passengers || !distance) {
                return res.status(400).json({ error: 'Missing required query parameters' });
            }

            if (isNaN(passengers) || passengers <= 0) {
                return res.status(400).json({ error: 'Passengers must be a positive number' });
            }
            
            if (isNaN(distance) || distance <= 0) {
                return res.status(400).json({ error: 'Distance must be a positive number' });
            }

            const vehicles = res.locals.vehicles;

            const suggestions = suggestVehicle(passengers, distance, 2, 2, vehicles);

            res.json(suggestions);
        }
        catch (error) {
            console.error('Error fetching suggestions:', error);
            res.status(500).json({ error: 'Failed to fetch suggestions' });
        }
    }
};