const hre = require("hardhat");

//import artifacts
const artifacts = hre.artifacts.readArtifactSync("MyContract");

async function main() {
  //initialize contract
  const contractAddress = "0x5724eeB7495fce0F881A65FF13c46F767686f765";
  const myContract = new hre.web3.eth.Contract(artifacts.abi, contractAddress);

  //make tx
  //...
}

main();
