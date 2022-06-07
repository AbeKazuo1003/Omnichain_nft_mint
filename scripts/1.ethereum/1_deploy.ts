import { ethers } from 'hardhat';
import EthereumCollectionConfig from '../../config/1.ethereum/EthereumCollectionConfig';
import EthereumContractArguments from '../../config/1.ethereum/EthereumContractArguments';
import EthereumTestContractArguments from '../../config/1.ethereum/EthereumTestContractArguments';

const hre = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  console.log('Deploying contract to Ethereum Network...');
  const network = hre.network.name;
  const Contract = await ethers.getContractFactory(
    EthereumCollectionConfig.contractName
  );
  if (network === 'mainnet') {
    console.log('Network: MainNet');
    const contract = await Contract.deploy(...EthereumContractArguments);
    await contract.deployed();
    console.log('Contract deployed to:', contract.address);
  } else if (network === 'rinkeby') {
    console.log('Network: TestNet');
    const contract = await Contract.deploy(...EthereumTestContractArguments);
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
