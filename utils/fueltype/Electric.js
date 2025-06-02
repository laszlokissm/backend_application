const FuelType = require('./FuelType');

class Electric extends FuelType {
    constructor() {
        super();
    }

    calculateEfficiency(vehicleRange, distance) {
        return vehicleRange;
    }

    calculateFuelCost(distance) {
        return distance * 1;
    }
}

module.exports = Electric;