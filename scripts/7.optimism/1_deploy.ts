import { ethers } from 'hardhat';
import OptimismCollectionConfig from '../../config/7.optimism/OptimismCollectionConfig';
import OptimismContractArguments from '../../config/7.optimism/OptimismContractArguments';
import OptimismTestContractArguments from '../../config/7.optimism/OptimismTestContractArguments';

const hre = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  console.log('Deploying contract to Optimism Network...');
  const network = hre.network.name;
  const Contract = await ethers.getContractFactory(
    OptimismCollectionConfig.contractName
  );
  if (network === 'optimism') {
    console.log('Network: MainNet');
    const contract = await Contract.deploy(...OptimismContractArguments);
    await contract.deployed();
    console.log('Contract deployed to:', contract.address);
  } else if (network === 'kovan') {
    console.log('Network: TestNet');
    const contract = await Contract.deploy(...OptimismTestContractArguments);
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
