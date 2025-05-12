import axios from "axios";

const API_URL = "https://api.frankfurter.dev/v1/latest";

/**
 * Fetch exchange rates for a given base currency.
 * @param {string} base - The base currency (e.g., "USD").
 * @returns {Promise<object>} - Exchange rate data.
 */
const fetchExchangeRates = async (base: string) => {
  try {
    const response = await axios.get(`${API_URL}?from=${base}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
};

const fetchHistoricalRates = async (base: string, date: string) => {
  try {
    const response = await axios.get(`${API_URL}?from=${base}&to=EUR&date=${date}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching historical exchange rates:", error);
    throw error;
  }
}

export { fetchExchangeRates, fetchHistoricalRates };