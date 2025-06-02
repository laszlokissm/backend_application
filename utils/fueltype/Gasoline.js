const FuelType = require('./FuelType');

class Gasoline extends FuelType {
    constructor() {
        super();
    }

    calculateEfficiency(vehicleRange, distance) {
        return vehicleRange;
    }

    calculateFuelCost(distance) {
        return distance * 2;
    }
}

module.exports = Gasoline;