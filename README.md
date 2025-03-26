🚀 Overview
This project is a Crypto Price Tracker built using React.js and Vite to understand and implement REST API consumption in the frontend.

I explored how REST APIs work, where:
✔️ The backend creates APIs
✔️ The frontend consumes APIs to fetch and display data

This project demonstrates fetching real-time cryptocurrency data and dynamically displaying it in a well-structured table.

🔧 Technologies Used
React.js (Frontend)
Vite (Build Tool)
REST API Integration
CSS (for styling)

🌐 API Used
This project fetches live cryptocurrency prices from CoinGecko API.

🔗 API Documentation: CoinGecko API

https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
The API returns a list of cryptocurrencies with details like:
✔️ Name
✔️ Symbol
✔️ Price (USD)
✔️ Market Cap
✔️ Logo

⚙️ How It Works
1️⃣ Fetches real-time crypto price data using the CoinGecko API.
2️⃣ Parses the JSON response and extracts required details (name, symbol, price, market cap, image).
3️⃣ Displays the data in a well-formatted table using React.
4️⃣ The UI is styled with CSS to make it clean and user-friendly.

🛠 Installation & Usage
Clone the Repository
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
Install Dependencies
npm install
Run the Project
npm run dev
Then open http://localhost:5173/ in your browser.

🌟 Features
✅ Real-time cryptocurrency price tracking
✅ REST API integration using fetch() or axios
✅ Responsive and minimal UI
✅ Styled using CSS

