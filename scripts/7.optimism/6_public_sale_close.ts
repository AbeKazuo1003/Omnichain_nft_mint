import NftContractProvider from '../../lib/NftContractProvider';

const hre = require('hardhat');

async function main() {
  const network = hre.network.name;
  // Attach to deployed contract
  const contract =
    network === 'optimism'
      ? await NftContractProvider.getOPTIMainnetContract()
      : await NftContractProvider.getOPTITestnetContract();

  // Pause the contract (if needed)
  if (!(await contract.paused())) {
    console.log('Pausing the contract...');

    await (await contract.setPaused(true)).wait();
  }
  console.log('Public sale is now closed!');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
