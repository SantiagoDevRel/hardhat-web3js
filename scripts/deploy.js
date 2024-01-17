const hre = require("hardhat");

async function main() {
  console.log(hre.network.provider);

  const accounts = await hre.web3.eth.getAccounts();
  console.log(accounts);
}

main();
