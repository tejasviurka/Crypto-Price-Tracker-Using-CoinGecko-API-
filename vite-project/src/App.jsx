import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoTable from "./components/CryptoTable";
import "./styles.css"; // Import the CSS file

const App = () => {
  const [cryptoData, setCryptoData] = useState([]); // Store API data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd", // Prices in USD
              order: "market_cap_desc", // Sorted by market cap
              per_page: 10, // Get top 10 cryptos
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptoData(response.data); // Update state with fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div style={{ textAlign: "center", backgroundColor: "#1e1e1e", color: "white", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2.5rem", padding: "20px" }}>Crypto Price Tracker</h1>
      {loading ? <p>Loading...</p> : <CryptoTable cryptoData={cryptoData} />}
    </div>
  );
};

export default App;
