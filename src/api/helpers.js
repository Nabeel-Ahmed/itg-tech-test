/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(
                `Network request failed with status ${response.status}`
            );
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error making network request:", error.message);
        // throw error; // Re-throw the error to propagate it to the calling code
    }
}
