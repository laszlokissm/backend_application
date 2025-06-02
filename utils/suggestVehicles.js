const createVehicleFuelType = require("./createVehicleFuelType");

/**
 * Suggests suitable vehicles based on passenger count, distance, pricing, and available vehicles.
 *
 * @param {number} passengers - The number of passengers to transport.
 * @param {number} distance - The distance of the trip in kilometers.
 * @param {number} pricePerKm - The price charged per kilometer.
 * @param {number} pricePerHalfHour - The price charged per half hour of travel.
 * @param {Array<Object>} vehicles - The list of available vehicles, each with properties: name, capacity, range, and fuel.
 * @returns {Array<Object>} An array of suggested vehicles with their names and assumed profit.
 */
const suggestVehicles = (passengers, distance, pricePerKm, pricePerHalfHour, vehicles) => {
    let suggestions = [];
    
    // Calculations
    vehicles.forEach(vehicle => {
        let vehicleName = vehicle.name;
        let vehicleCapacity = vehicle.capacity;
        let vehicleRange = vehicle.range;
        let vehicleFuel = createVehicleFuelType(vehicle.fuel);

        // calculate efficiency
        vehicleRange = vehicleFuel.calculateEfficiency(vehicleRange, distance);

        if (vehicleCapacity >= passengers && vehicleRange >= distance) {

            let incomeFromDistance = distance * pricePerKm; // in euros, 2€ per km
            let incomeFromTime; // in euros, 2€ per half hour
            let travelTime; // in minutes

            // Calculate travel time
            if (distance < 50) {
                travelTime = distance * 2;
            }
            else{
                travelTime = distance * 1;
            }

            let travelTimeHalfHours = Math.ceil(travelTime / 30);
            incomeFromTime = travelTimeHalfHours * pricePerHalfHour;

            // Calculate income
            let income = incomeFromDistance + incomeFromTime;

            
            // Calculate fuel cost
            let fuelCost = vehicleFuel.calculateFuelCost(distance);
            
            // Calculate profit
            let profit = income - fuelCost;

            suggestions.push({
                vehicleName: vehicleName,
                assumedProfit: profit
            });
        }
    });

    return suggestions;
}

module.exports = suggestVehicles;
