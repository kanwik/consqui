/**
 * Fetches data based on the dataset name.
 * @param {string} name - The name of the dataset representing the selection.
 * @returns {Promise<any>} A Promise that resolves with the fetched data.
 */
async function fetchDataByName(name) {
    // Implementation to fetch data based on the dataset name
    const response = await fetch(`/api/data/${name}`);
    return response.json();
}
