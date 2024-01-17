const hre = require("hardhat");

//import abi
const {
  abi,
} = require("../artifacts/contracts/MyContract.sol/MyContract.json");

async function main() {
  //initialize contract
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const myContract = new hre.web3.eth.Contract(abi, contractAddress);

  //make call
  /*   const _number = await myContract.methods.getNumber().call();
  console.log("Number:", _number); */

  const accounts = await hre.web3.eth.getAccounts();

  const tx2 = await hre.web3.eth.sendTransaction({
    from: accounts[0],
    to: accounts[1],
    value: hre.web3.utils.toWei("5000", "ether"),
  });

  console.log("TX2", tx2);

  console.log("BALANCE", await hre.web3.eth.getBalance(accounts[0]));
}

main();
