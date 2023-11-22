import { request } from "./helpers";

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
export default async function getData() {
    const vehicleUrl = "/api/vehicles.json";
    const vehicleUrlResults = await request(vehicleUrl);
    const detailedVehicleArray = await getVehicleDetails(
        // Only gets details for those with an apiUrl
        vehicleUrlResults.filter((v) => v.apiUrl)
    );

    const combinedList = combineDetails(
        vehicleUrlResults,
        detailedVehicleArray
    );

    const vehiclesWithPrices = combinedList.filter((cl) => cl.price);
    return vehiclesWithPrices;
}

/**
 * Loops through all vehicles to grab more data for each vehicle
 *
 * @param {Array<Object>} vehicleList - A basic list of vehicles which can be obtained from the API.
 * @returns {Array<Object>} - Returns an array of detailed vehicles  information.
 */
async function getVehicleDetails(vehicleList) {
    const detailedVehicleArray = [];

    const promises = vehicleList.map(async (vehicle) => {
        try {
            const results = await request(vehicle.apiUrl);
            detailedVehicleArray.push(results);
        } catch (error) {
            console.error("Failed to get vehicle details:", error.message);
        }
    });

    await Promise.all(promises);

    // Removes empty values from results
    return detailedVehicleArray.filter((dvh) => dvh);
}

/**
 * Combines basic vehicle information with the detailed vehicle list.
 *
 * @param {Array<Object>} vehicleList - A basic list of vehicles.
 * @param {Array<Object>} detailedVehicleList - Detailed list of vehicles.
 * @returns {Array<Object>} - The combined array of vehicles with detailed information.
 */
function combineDetails(vehicleList, detailedVehicleList) {
    const combinedList = vehicleList.map((vehicle) => {
        const detailedVehicle = detailedVehicleList.find(
            (detailed) => detailed.id === vehicle.id
        );

        if (detailedVehicle) {
            return { ...vehicle, ...detailedVehicle };
        }
        return vehicle;
    });

    return combinedList;
}
