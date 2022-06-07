import { utils } from 'ethers';
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import NftContractProvider from '../../lib/NftContractProvider';
import EthereumCollectionConfig from '../../config/1.ethereum/EthereumCollectionConfig';

const hre = require('hardhat');

async function main() {
  const network = hre.network.name;
  // Check configuration
  if (EthereumCollectionConfig.whitelistAddresses.length < 1) {
    throw (
      '\x1b[31merror\x1b[0m ' +
      'The whitelist is empty, please add some addresses to the configuration.'
    );
  }
  // Build the Merkle Tree
  const leafNodes = EthereumCollectionConfig.whitelistAddresses.map((addr) =>
    keccak256(addr)
  );
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const rootHash = '0x' + merkleTree.getRoot().toString('hex');

  // Attach to deployed contract
  const contract =
    network === 'mainnet'
      ? await NftContractProvider.getEthereumMainnetContract()
      : await NftContractProvider.getEthereumTestnetContract();

  // Update sale price (if needed)
  const whitelistPrice = utils.parseEther(
    EthereumCollectionConfig.whitelistSale.price.toString()
  );
  if (!(await contract.cost()).eq(whitelistPrice)) {
    console.log(
      `Updating the token price to ${EthereumCollectionConfig.whitelistSale.price} ${
        network === 'mainnet'
          ? EthereumCollectionConfig.mainnet.symbol
          : EthereumCollectionConfig.testnet.symbol
      }...`
    );

    await (await contract.setCost(whitelistPrice)).wait();
  }

  // Update max amount per TX (if needed)
  if (
    !(await contract.maxMintAmountPerTx()).eq(
      EthereumCollectionConfig.whitelistSale.maxMintAmountPerTx
    )
  ) {
    console.log(
      `Updating the max mint amount per TX to ${EthereumCollectionConfig.whitelistSale.maxMintAmountPerTx}...`
    );

    await (
      await contract.setMaxMintAmountPerTx(
        EthereumCollectionConfig.whitelistSale.maxMintAmountPerTx
      )
    ).wait();
  }

  // Update root hash (if changed)
  if ((await contract.merkleRoot()) !== rootHash) {
    console.log(`Updating the root hash to: ${rootHash}`);

    await (await contract.setMerkleRoot(rootHash)).wait();
  }

  // Enable whitelist sale (if needed)
  if (!(await contract.whitelistMintEnabled())) {
    console.log('Enabling whitelist sale...');

    await (await contract.setWhitelistMintEnabled(true)).wait();
  }

  console.log('Whitelist sale has been enabled!');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
