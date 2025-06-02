# Documentation

## Overview
This application is a backend application, part of the administrative system of a passanger transportation company. 

## Tech Stack

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Architecture**: RESTful API

## Installation & Setup

### Prerequisites
- Node.js
- MongoDB
- npm

### Installation Steps

1. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Database setup**
   Make sure MongoDB is running:
   ```powershell
   # MongoDB connection is preconfigured to localhost:27017/mydb
   ```

4. **Start the application**
   ```powershell
   node server.js
   ```

5. **Verify installation**
   The API will be running at `http://localhost:3000`

## API Endpoints

### 1. POST /api/vehicles

- **Functionality**: Creates and saves a new vehicle record

**Request Body Format:**
```json
{
  "name": NAME,
  "capacity": CAPACITY,
  "range": RANGE,
  "fuel": FUELTYPE
}
```

**Adding a New Fuel Type:**
- Create a string name for the new fuel type (in lowercase)
- Add a new class in `utils/fueltype` that extends `FuelType` class
- Override its functions with appropriate calculations
- Modify `createVehicleFuelType` function to add the new class to the switch statement

>Note: This solution uses object-oriented principles (factory and polymorphism), but adding new fuel types requires modifying the factory code, rather than simply adding a new class or database entry. A more extensible approach could involve defining fuel types in the database, allowing new types to be added without code changes.

### 2. GET /api/suggest

- **Functionality**: Returns possible vehicle suggestions based on passenger count and distance

**Query Parameters:**
- `passengers` (required): Number of passengers (integer)
- `distance` (required): Distance of the trip (number, e.g., kilometers)

**Example:**
```
GET /api/suggest?passengers=4&distance=120
```

**Process:**
This process gets all vehicles from the database and checks if they could fulfill the given trip. For vehicles that can make the trip, we calculate the assumed profit with the following rules:

>What does the profit consist of?
>- Travel fee: Every customer pays €2 for every kilometer traveled – plus another €2 for every half hour
started
>- Refueling: After every trip, we fill the tank. This costs €2 per kilometer traveled for gasoline and €1 for
electric drive

>Note: The part of the trips under 50 km mostly takes place in the city, here every kilometer traveled should be
calculated as taking 2 minutes, while from 50 km onwards, a kilometer traveled takes 1 minute. Similarly, for
city trips (which we can consider as the part of the trips under 50 km) for hybrid cars, the remaining range
should only decrease by 1 km after every second kilometer traveled.

*(rules inserted from assingment)*

**Response Format:**
```json
[
  {
    "vehicleName": "Vehicle 1",
    "assumedProfit": 123.45
  },
  // ...
]
```

## Documentation of other parts

### Models

#### models/vehicle.js
A Mongoose schema defining the Vehicle model with fields for ID, name, passenger capacity, range, and fuel type; this model serves as the core data structure for all vehicle operations in the application.

### Fuel Type System

The application implements a polymorphic fuel type system with three main types (Electric, Hybrid, Gasoline) that inherit from a base FuelType class:

- **FuelType.js**: Base abstract class defining the interface with calculateEfficiency() and calculateFuelCost() methods
- **Electric.js**: Implementation for electric vehicles with specific efficiency and cost calculations
- **Hybrid.js**: Implementation for hybrid vehicles with specific efficiency and cost calculations
- **Gasoline.js**: Implementation for traditional gasoline vehicles with specific efficiency and cost calculations

### Middleware Functions

The application uses middleware functions for its API endpoints, with addVehicle.js handling vehicle creation, getSuggestions.js processing recommendation requests, and getVehicles.js retrieving vehicle information from the database.

### Fuel Type Factory

The createVehicleFuelType.js module acts as a factory function that instantiates the appropriate fuel type class based on a string identifier, enabling the application to work with different vehicle propulsion systems through a unified interface.

---

## Note on possible additions

Unit test could be added using the jest testing library.

Using .env instead of hardcoding the database.

---

## Note on Documentation Formatting and Code Review

Parts of this documentation have been formatted and rephrased with the assistance of a large language model (LLM). All content has been reviewed for accuracy and clarity by a human.

After the code was written manually by a human, a large language model (LLM) was consulted to review it, suggest improvements, and assist with documentation phrasing. All suggestions and changes were subsequently reviewed by a human.

All design choices and core functionality were made by a human.