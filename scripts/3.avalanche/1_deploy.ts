import { ethers } from 'hardhat';
import AVAXCollectionConfig from '../../config/3.avalanche/AVAXCollectionConfig';
import AVAXContractArguments from '../../config/3.avalanche/AVAXContractArguments';
import AVAXTestContractArguments from '../../config/3.avalanche/AVAXTestContractArguments';

const hre = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  console.log('Deploying contract to Avalanche Network...');
  const network = hre.network.name;
  const Contract = await ethers.getContractFactory(
    AVAXCollectionConfig.contractName
  );
  if (network === 'avalanche') {
    console.log('Network: MainNet');
    const contract = await Contract.deploy(...AVAXContractArguments);
    await contract.deployed();
    console.log('Contract deployed to:', contract.address);
  } else if (network === 'fuji') {
    console.log('Network: TestNet');
    const contract = await Contract.deploy(...AVAXTestContractArguments);
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
