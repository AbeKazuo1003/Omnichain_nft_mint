import { utils } from 'ethers';
import OptimismCollectionConfig from './OptimismCollectionConfig';

const OptimismTestContractArguments = [
  OptimismCollectionConfig.tokenName,
  OptimismCollectionConfig.tokenSymbol,
  utils.parseEther(OptimismCollectionConfig.whitelistSale.price.toString()),
  OptimismCollectionConfig.whitelistSale.maxMintAmountPerTx,
  OptimismCollectionConfig.hiddenMetadataUri,
  OptimismCollectionConfig.maxSupply,
  OptimismCollectionConfig.startIndex,
  OptimismCollectionConfig.testnet_lzEndPoint
] as const;

export default OptimismTestContractArguments;
