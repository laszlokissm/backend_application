const Vehicle = require("../models/vehicle");

module.exports = function () {
    return (req, res) => {
        const { name, capacity, range, fuel } = req.body;

        // Validation
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ error: 'Name is required and must be a non-empty string.' });
        }
        if (capacity === undefined || isNaN(Number(capacity)) || Number(capacity) <= 0) {
            return res.status(400).json({ error: 'Capacity is required and must be a positive number.' });
        }
        if (range === undefined || isNaN(Number(range)) || Number(range) <= 0) {
            return res.status(400).json({ error: 'Range is required and must be a positive number.' });
        }
        if (!fuel || typeof fuel !== 'string' || fuel.trim() === '') {
            return res.status(400).json({ error: 'Fuel is required and must be a non-empty string.' });
        }

        const vehicle = new Vehicle({
            name,
            capacity: Number(capacity),
            range: Number(range),
            fuel
        });

        vehicle.save().then(() => {
            res.status(201).json(vehicle);
        }).catch((error) => {
            console.error('Error saving vehicle:', error);
            res.status(500).json({ error: 'Failed to save vehicle' });
        });
    };
};