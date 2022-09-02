import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    localhost: {
      timeout: 100_000_000
    }
  },
  mocha: {
    timeout: 100_000_000
  }
};

export default config;
