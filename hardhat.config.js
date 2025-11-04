// // const { version } = require("hardhat");

// // require("@nomiclabs/hardhat-waffle");
// // require("@nomiclabs/hardhat-etherscan");
// // require("hardhat-deploy");
// // require("solidity-coverage");
// // require("hardhat-gas-reporter");
// // require("hardhat-contract-sizer");
// // require("dotenv").config();

// // const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
// // const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
// // const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
// // const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";

// // module.exports = {
// //   defaultNetwork: "hardhat",
// //   networks: {
// //     hardhat: {
// //       chainId: 31337,
// //       blockConfirmations: 1,
// //     },
// //     localhost: {
// //       url: "http://127.0.0.1:8545",
// //       chainId: 31337,
// //       blockConfirmations: 1,
// //     },
// //     sepolia: {
// //       chainId: 11155111,
// //       blockConfirmations: 6,
// //       url: SEPOLIA_RPC_URL,
// //       accounts: [
// //         PRIVATE_KEY.startsWith("0x") ? PRIVATE_KEY : `0x${PRIVATE_KEY}`,
// //       ],
// //     },
// //   },
// //   solidity: {
// //     // solidity: "0.8.8"
// //     compilers: [
// //       { version: "0.8.7" },
// //       { version: "0.6.6" },
// //       { version: "0.4.19" }
// //     ]
// //   },
// //   gasReporter: {
// //     enabled: false,
// //     currency: "USD",
// //     outputFile: "gas-report.txt",
// //     noColors: true,
// //   },
// //   namedAccounts: {
// //     deployer: {
// //       default: 0,
// //     },
// //     player: {
// //       default: 1,
// //     },
// //   },
// //   mocha: {
// //     timeout: 300000,
// //   },
// //   etherscan: {
// //     apiKey: {
// //       sepolia: ETHERSCAN_API_KEY,
// //     },
// //   },
// // };

// require("@nomiclabs/hardhat-waffle")
// require("hardhat-gas-reporter")
// require("@nomiclabs/hardhat-etherscan")
// require("dotenv").config()
// require("solidity-coverage")
// require("hardhat-deploy")

// const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || process.env.ALCHEMY_MAINNET_RPC_URL || ""
// const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
// const GOERLI_RPC_URL =
//     process.env.GOERLI_RPC_URL || "https://eth-goerli.alchemyapi.io/v2/your-api-key"
// const PRIVATE_KEY =
//     process.env.PRIVATE_KEY || "0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

// module.exports = {
//     defaultNetwork: "hardhat",
//     networks: {
//         hardhat: {
//             chainId: 31337,
//             forking: {
//                 url: process.env.ALCHEMY_URL,
//             },
//         },

//         // sepolia: {
//         //     chainId: 11155111,
//         //     blockConfirmations: 6,
//         //     url: SEPOLIA_RPC_URL,
//         //     accounts: [
//         //     PRIVATE_KEY.startsWith("0x") ? PRIVATE_KEY : `0x${PRIVATE_KEY}`,
//         //     ],
//         // },

//         localhost: {
//             chainId: 31337,
//         },

//         goerli: {
//             url: GOERLI_RPC_URL,
//             accounts: [PRIVATE_KEY],
//             chainId: 5,
//             blockConfirmations: 6,
//         },
//     },
//     solidity: {
//         compilers: [
//             {
//                 version: "0.8.8",
//             },
//             {
//                 version: "0.6.12",
//             },
//             {
//                 version: "0.4.19",
//             },
//         ],
//     },
//     etherscan: {
//         apiKey: ETHERSCAN_API_KEY,
//     },
//     gasReporter: {
//         enabled: true,
//         currency: "USD",
//         outputFile: "gas-report.txt",
//         noColors: true,
//         // coinmarketcap: COINMARKETCAP_API_KEY,
//     },
//     namedAccounts: {
//         deployer: {
//             default: 0, // here this will by default take the first account as deployer
//             1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
//         },
//     },
// }

require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || process.env.ALCHEMY_MAINNET_RPC_URL || ""
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL || "https://eth-goerli.alchemyapi.io/v2/your-api-key"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY || "0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            forking: {
                url: process.env.ALCHEMY_URL,
            },
        },
        localhost: {
            chainId: 31337,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.8",
            },
            {
                version: "0.6.12",
            },
            {
                version: "0.4.19",
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
}
