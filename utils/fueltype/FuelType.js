class FuelType {
  constructor() {
  }

  calculateEfficiency() {
    return 0; // Default implementation, should be overridden by subclasses
  }

  calculateFuelCost() {
    return 0; // Default implementation, should be overridden by subclasses
  }
}

module.exports = FuelType;