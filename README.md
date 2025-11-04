# Defi-Hardhat Project

A decentralized finance (DeFi) project built using Hardhat for Ethereum development, integrating Aave lending protocols and WETH (Wrapped Ether) for automated borrowing and lending scripts.

## Features

- Integrates with Aave protocol for borrowing assets
- Supports WETH operations using custom scripts
- Hardhat-based project structure for smart contract deployment and testing
- Sensitive keys and API endpoints managed via `.env` file
- Written in JavaScript (Node.js) using ethers.js as the web3 provider

## Project Structure

- `contracts/` – Solidity contract interfaces for Aave and ERC20
- `scripts/aaveBorrow.js` – Script to execute borrowing from Aave
- `scripts/getWeth.js` – Script to get/test Wrapped Ether
- `.env` – Store your private keys and secrets here
- `hardhat.config.js` – Hardhat configuration
- `package.json` & `yarn.lock` – Dependencies management

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Yarn
- Hardhat
- Aave testnet API/key (for mainnet-fork or testnet)
- An Ethereum wallet/private key (stored securely in `.env`)

### Installation
There was a issue depositeFunctoin not work i think cause of or something esle if anybody was able to solve the issue let me known 

### Configuration

`.env` file example:

### How to Use

1. **Get WETH:**
2. **Borrow via Aave:**

## Technologies

- [Hardhat](https://hardhat.org/)
- [ethers.js](https://docs.ethers.org/)
- [Aave Protocol](https://docs.aave.com/portal/)
- Yarn

## Security

- Do **not** commit your `.env` file or private keys to any public repo.
- Use `.gitignore` to keep secrets safe.

## License

This project is open-source for educational purposes.
