const Electric = require("./fueltype/Electric");
const Hybrid = require("./fueltype/Hybrid");
const Gasoline = require("./fueltype/Gasoline");

/**
 * Factory function to create a vehicle fuel type instance based on the provided fuel type.
 * If adding a new fuel type, extend the switch statement below.
 * @param {string} fuelType - The type of fuel (e.g., 'electric', 'hybrid', 'gasoline').
 * @returns {Object} An instance of the corresponding fuel type class.
 */
const getVehicleFuelType = (fuelType) => {
    switch (fuelType) {
        case 'electric':
            return new Electric();
        case 'hybrid':
            return new Hybrid();
        case 'gasoline':
            return new Gasoline();
        default:
            console.log('Unknown fuel type:', fuelType);
            throw new Error('Unknown fuel type');
    }
}

module.exports = getVehicleFuelType;