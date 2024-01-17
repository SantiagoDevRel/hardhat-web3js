require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-web3-v4");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://gateway.tenderly.co/public/sepolia",
      accounts: ["your private key (env file)"],
    },
    hardhat: {
      logging: "debug",
    },
  },
};

//add web3js plugin
extendEnvironment((hre) => {
  const { Web3 } = require("web3");
  hre.Web3 = Web3;

  // hre.network.provider is an EIP1193-compatible provider.
  hre.web3 = new Web3(hre.network.provider);
});
