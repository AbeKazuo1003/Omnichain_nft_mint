import { ethers } from 'hardhat';
import FantomCollectionConfig from '../../config/6.fantom/FantomCollectionConfig';
import FantomContractArguments from '../../config/6.fantom/FantomContractArguments';
import FantomTestContractArguments from '../../config/6.fantom/FantomTestContractArguments';

const hre = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  console.log('Deploying contract to Fantom Network...');
  const network = hre.network.name;
  const Contract = await ethers.getContractFactory(
    FantomCollectionConfig.contractName
  );
  if (network === 'fantom') {
    console.log('Network: MainNet');
    const contract = await Contract.deploy(...FantomContractArguments);
    await contract.deployed();
    console.log('Contract deployed to:', contract.address);
  } else if (network === 'fantom-testnet') {
    console.log('Network: TestNet');
    const contract = await Contract.deploy(...FantomTestContractArguments);
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
