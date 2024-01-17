const hre = require("hardhat");
//import artifacts
const artifacts = hre.artifacts.readArtifactSync("MyContract");

async function deploy() {
  //initialize contract
  const myContract = new hre.web3.eth.Contract(artifacts.abi, hre.web3);

  //get accounts
  const accounts = await hre.web3.eth.getAccounts();

  //send TX
  const tx = await myContract
    .deploy({
      data: artifacts.bytecode,
      arguments: [777],
    })
    .send({
      from: accounts[0],
    });

  console.log("Contract deployed to:", tx.options.address);
}

deploy();
