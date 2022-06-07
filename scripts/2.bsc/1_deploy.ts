import { ethers } from 'hardhat';
import BSCCollectionConfig from '../../config/2.bsc/BSCCollectionConfig';
import BSCContractArguments from '../../config/2.bsc/BSCContractArguments';
import BSCTestContractArguments from '../../config/2.bsc/BSCTestContractArguments';

const hre = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  console.log('Deploying contract to Binance Network...');
  const network = hre.network.name;
  const Contract = await ethers.getContractFactory(BSCCollectionConfig.contractName);
  if (network === 'bsc') {
    console.log('Network: MainNet');
    const contract = await Contract.deploy(...BSCContractArguments);
    await contract.deployed();
    console.log('Contract deployed to:', contract.address);
  } else if (network === 'bsc-testnet') {
    console.log('Network: TestNet');
    const contract = await Contract.deploy(...BSCTestContractArguments);
    await contract.deployed();
    console.log('Contract deployed to:', contract.address);
  } else {
    console.log('Error Network: Invalid Network Name');
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
