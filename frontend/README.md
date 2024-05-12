# CoinPulse - Cryptocurrencies Tracker

The overall application consists of frontend and backend applications. This application concerns **THE FRONTEND.**

### Application description:

Responsive Web Application for desktop and mobile devices. It will deal with the recently hot topic of cryptocurrencies, namely it will be a useful tool for tracking their prices as well as maintaining your own investment portfolio. It will be possible to use the application in both offline and logged-in mode. Registration and logging in will unlock the ability to maintain one's investment portfolio and a list of cryptocurrencies watched, and this data will be sent to the backend and stored in the database.
The application will include a separated frontend and backend part. Data on cryptocurrencies prices will be retrieved via the external Binance API, which will be queried by the backend (on behalf of the frontend via user interaction with the website). The data will be appropriately processed on the backend side and sent to the frontend in the form required by the interface for proper rendering.

### Technology stack:

- NextJS v14 (pages router) with TypeScript
- ChakraUI
- Next-Auth

### Main features:

- Main panel with prices - data pulled from the external API
- Login / signup panel
- Portfolio panel - panel for keeping track of one's cryptocurrency portfolio

### Features to be expected in the future:

- Panel for a specific cryptocurrency containing more detailed data
- Panel with auxiliary tools - e.g. token value converter, events calendar etc.
- Watchlist panel - panel for tracking prices of chosen cryptocurrencies, possibility of flexible grouping

### Work methodology:

Project run on Gitlab according to the tasks dissected at the initial stage on the ISSUE BOARD.
