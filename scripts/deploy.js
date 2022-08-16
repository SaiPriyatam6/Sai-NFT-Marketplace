const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");
/* When we deploy a contract,
   we will get the json containing address and other details*/
async function main() {
  const [deployer] = await ethers.getSigners();
  const balance = await deployer.getBalance();
  // hre=hardhat runtime environment
  const Marketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  // We will get the JSON here
  const marketplace = await Marketplace.deploy();
  // Wait till it is deployed
  await marketplace.deployed();

  const data = {
    address: marketplace.address,
    abi: JSON.parse(marketplace.interface.format("json")),
  };

  //This writes the ABI and address to the marketplace.json
  fs.writeFileSync("./src/Marketplace.json", JSON.stringify(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
