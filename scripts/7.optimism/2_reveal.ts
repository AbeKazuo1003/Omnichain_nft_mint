import NftContractProvider from '../../lib/NftContractProvider';

const hre = require('hardhat');

async function main() {
  const network = hre.network.name;
  if (
    undefined === process.env.COLLECTION_URI_PREFIX ||
    process.env.COLLECTION_URI_PREFIX === 'ipfs://___CID___/'
  ) {
    throw (
      '\x1b[31merror\x1b[0m ' +
      'Please add the URI prefix to the ENV configuration before running this command.'
    );
  }
  console.log('Network: Optimism Network');
  // Attach to deployed contract
  const contract =
    network === 'optimism'
      ? await NftContractProvider.getOPTIMainnetContract()
      : await NftContractProvider.getOPTITestnetContract();

  // Update URI prefix (if changed)
  if ((await contract.uriPrefix()) !== process.env.COLLECTION_URI_PREFIX) {
    console.log(`Updating the URI prefix to: ${process.env.COLLECTION_URI_PREFIX}`);
    await (await contract.setUriPrefix(process.env.COLLECTION_URI_PREFIX)).wait();
  }

  // Revealing the collection (if needed)
  if (!(await contract.revealed())) {
    console.log('Revealing the collection...');
    await (await contract.setRevealed(true)).wait();
  }

  console.log('Your collection is now revealed!');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
