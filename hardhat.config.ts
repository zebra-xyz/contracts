import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      }
    ]
  },
  defaultNetwork: "dev",
  networks: {
    dev: {
      // chainId: 534351,
      url: 'http://127.0.0.1:8545',
    },
    scrolltest: {
      chainId: 534351,
      url: 'https://1rpc.io/scroll/sepolia',
      accounts: [process.env.WALLET_PRIVATE_KEY],
      // gas: 10000000,
      // gasPrice: 5000000000
    }
  },
 };

export default config;
