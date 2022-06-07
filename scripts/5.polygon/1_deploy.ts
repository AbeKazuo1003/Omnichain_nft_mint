import { ethers } from 'hardhat';
import PolygonCollectionConfig from '../../config/5.polygon/PolygonCollectionConfig';
import PolygonContractArguments from '../../config/5.polygon/PolygonContractArguments';
import PolygonTestContractArguments from '../../config/5.polygon/PolygonTestContractArguments';

const hre = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  console.log('Deploying contract to Polygon Network...');
  const network = hre.network.name;
  const Contract = await ethers.getContractFactory(
    PolygonCollectionConfig.contractName
  );
  if (network === 'polygon') {
    console.log('Network: MainNet');
    const contract = await Contract.deploy(...PolygonContractArguments);
    await contract.deployed();
    console.log('Contract deployed to:', contract.address);
  } else if (network === 'mumbai') {
    console.log('Network: TestNet');
    const contract = await Contract.deploy(...PolygonTestContractArguments);
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
