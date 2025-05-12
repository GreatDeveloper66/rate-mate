import { useState, useEffect } from "react";
import { fetchExchangeRates } from "../api/currencyAPI"; // Adjust the import path as necessary

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    if (amount) {
      fetchExchangeRates(baseCurrency).then((data) => {
        setExchangeRate(data.rates[targetCurrency]); // 
      });
    }
  }, [amount, baseCurrency, targetCurrency]);

  return (
    <div>
      <h2>Rate Mate</h2>
      <div>
        <label htmlFor="amount">Amount in {baseCurrency}:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount in USD"
        />
        <label htmlFor = "currency">Base Currency:</label>
        <select id="currency" onChange={(e) => setBaseCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
            <option value="SEK">SEK</option>
            <option value="NZD">NZD</option>
            <option value="MXN">MXN</option>
            </select>
        <label htmlFor = "currency">Target Currency:</label>
        <select id="currency" onChange={(e) => setTargetCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
            <option value="SEK">SEK</option>
            <option value="NZD">NZD</option>
            <option value="MXN">MXN</option>
            </select>
        <button onClick={() => fetchExchangeRates(baseCurrency)}>Convert</button>

      </div>
      
      {exchangeRate && <p>Converted Amount: {Number(amount) * exchangeRate} EUR</p>}
    </div>
  );
};

export default CurrencyConverter;