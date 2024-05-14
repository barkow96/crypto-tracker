# CoinPulse - Cryptocurrencies Tracker

The overall application consists of frontend and backend applications. This application concerns **THE BACKEND.**

### Application description:

Responsive Web Application for desktop and mobile devices. It will deal with the recently hot topic of cryptocurrencies, namely it will be a useful tool for tracking their prices as well as maintaining your own investment portfolio. It will be possible to use the application in both offline and logged-in mode. Registration and logging in will unlock the ability to maintain one's investment portfolio and a list of cryptocurrencies watched, and this data will be sent to the backend and stored in the database.
The application will include a separated frontend and backend part. Data on cryptocurrencies prices will be retrieved via the external Binance API, which will be queried by the backend (on behalf of the frontend via user interaction with the website). The data will be appropriately processed on the backend side and sent to the frontend in the form required by the interface for proper rendering.

### Technology stack:

- Strapi v4.23 with TypeScript
- PostgreSQL

### Main features:

- Endpoint COINS - data pulled from the external API
- Endpoint SIGNUP - for the purpose of validating and creating new users
- Endpoint PORTFOLIO - for the purpose of operations on user's portfolios: find, update, create
- Endpoint PORFOLIO-COIN - for the purpose of operations on coins: delete, move
- Endpoint PORFOLIO-TRANSACTION - for the purpose of creating new transactions (purchase or sale of coins)

### Work methodology:

Project run on Gitlab according to the tasks dissected at the initial stage on the ISSUE BOARD.
