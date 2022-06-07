import { ethers } from 'hardhat';
import ARBICollectionConfig from '../../config/4.arbitrum/ARBICollectionConfig';
import ARBIContractArguments from '../../config/4.arbitrum/ARBIContractArguments';
import ARBITestContractArguments from '../../config/4.arbitrum/ARBITestContractArguments';

const hre = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  console.log('Deploying contract to Arbitrum Network...');
  const network = hre.network.name;
  const Contract = await ethers.getContractFactory(
    ARBICollectionConfig.contractName
  );
  if (network === 'arbitrum') {
    console.log('Network: MainNet');
    const contract = await Contract.deploy(...ARBIContractArguments);
    await contract.deployed();
    console.log('Contract deployed to:', contract.address);
  } else if (network === 'arbitrum-rinkeby') {
    console.log('Network: TestNet');
    const contract = await Contract.deploy(...ARBITestContractArguments);
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
