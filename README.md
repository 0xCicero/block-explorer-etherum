# Ethereum Transaction Checker

A simple and lightweight Ethereum transaction checker written in JavaScript. This tool monitors the Ethereum blockchain for transactions to a specified account, and reports them to a Discord channel using webhooks.

## Features

- Monitors the latest block on the Ethereum blockchain for transactions.
- Sends a message to a Discord channel when a new block is checked.
- Reports found transactions to the specified account to a Discord channel.

## Dependencies

- [web3.js](https://github.com/ethereum/web3.js/) - Ethereum JavaScript API
- [discord.js](https://github.com/discordjs/discord.js/) - A powerful library for interacting with the Discord API

## Setup

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ethereum-transaction-checker.git
    cd ethereum-transaction-checker
    ```
3. Install the necessary npm packages:
    ```bash
    npm install web3 discord.js
    ```
4. Create a `.env` file in the root directory of the project and add the following, replacing `'your-infura-id'` and `'your-discord-webhook-id'` `'your-discord-webhook-token'` with your own credentials:
    ```env
    INFURA_ID=your-infura-id
    DISCORD_WEBHOOK_ID=your-discord-webhook-id
    DISCORD_WEBHOOK_TOKEN=your-discord-webhook-token
    ```
5. Run the program:
    ```bash
    node index.js
    ```

## Usage

This script is set up to check the latest block every 15 seconds and report any transactions to the specified account to a Discord channel.

```javascript
let txChecker = new TransactionChecker(process.env.INFURA_ID, 'Address');
setInterval(() => {
    txChecker.checkBlock();
}, 15 * 1000);
