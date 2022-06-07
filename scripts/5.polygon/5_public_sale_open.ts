import { utils } from 'ethers';
import NftContractProvider from '../../lib/NftContractProvider';
import PolygonCollectionConfig from '../../config/5.polygon/PolygonCollectionConfig';

const hre = require('hardhat');

async function main() {
  const network = hre.network.name;
  // Attach to deployed contract
  const contract =
    network === 'polygon'
      ? await NftContractProvider.getPolygonMainnetContract()
      : await NftContractProvider.getPolygonTestnetContract();

  // Update sale price (if needed)
  const publicSalePrice = utils.parseEther(
    PolygonCollectionConfig.publicSale.price.toString()
  );
  if (!(await contract.cost()).eq(publicSalePrice)) {
    console.log(
      `Updating the token price to ${PolygonCollectionConfig.publicSale.price} ${
        network === 'polygon'
          ? PolygonCollectionConfig.mainnet.symbol
          : PolygonCollectionConfig.testnet.symbol
      }...`
    );

    await (await contract.setCost(publicSalePrice)).wait();
  }

  // Update max amount per TX (if needed)
  if (
    !(await contract.maxMintAmountPerTx()).eq(
      PolygonCollectionConfig.publicSale.maxMintAmountPerTx
    )
  ) {
    console.log(
      `Updating the max mint amount per TX to ${PolygonCollectionConfig.publicSale.maxMintAmountPerTx}...`
    );

    await (
      await contract.setMaxMintAmountPerTx(
        PolygonCollectionConfig.publicSale.maxMintAmountPerTx
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
