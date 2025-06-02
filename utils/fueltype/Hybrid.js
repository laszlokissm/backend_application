const FuelType = require('./FuelType');

class Hybrid extends FuelType {
    constructor() {
        super();
    }

    calculateEfficiency(vehicleRange, distance) {
        if (distance < 50) {
            return vehicleRange * 2;
        }
        return vehicleRange * 1;
    }

    calculateFuelCost(distance) {
        return distance * 2;
    }
}

module.exports = Hybrid;