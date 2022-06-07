import { utils } from 'ethers';
import NftContractProvider from '../../lib/NftContractProvider';
import EthereumCollectionConfig from '../../config/1.ethereum/EthereumCollectionConfig';
import { network } from 'hardhat';

const hre = require('hardhat');

async function main() {
  const network = hre.network.name;
  // Attach to deployed contract
  const contract =
    network === 'mainnet'
      ? await NftContractProvider.getEthereumMainnetContract()
      : await NftContractProvider.getEthereumTestnetContract();

  // Update sale price (if needed)
  const publicSalePrice = utils.parseEther(
    EthereumCollectionConfig.publicSale.price.toString()
  );
  if (!(await contract.cost()).eq(publicSalePrice)) {
    console.log(
      `Updating the token price to ${EthereumCollectionConfig.publicSale.price} ${
        network === 'mainnet'
          ? EthereumCollectionConfig.mainnet.symbol
          : EthereumCollectionConfig.testnet.symbol
      }...`
    );

    await (await contract.setCost(publicSalePrice)).wait();
  }

  // Update max amount per TX (if needed)
  if (
    !(await contract.maxMintAmountPerTx()).eq(
      EthereumCollectionConfig.publicSale.maxMintAmountPerTx
    )
  ) {
    console.log(
      `Updating the max mint amount per TX to ${EthereumCollectionConfig.publicSale.maxMintAmountPerTx}...`
    );

    await (
      await contract.setMaxMintAmountPerTx(
        EthereumCollectionConfig.publicSale.maxMintAmountPerTx
      )
    ).wait();
  }

  // Unpause the contract (if needed)
  if (await contract.paused()) {
    console.log('Unpausing the contract...');

    await (await contract.setPaused(false)).wait();
  }
  console.log('Public sale is now open!');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
