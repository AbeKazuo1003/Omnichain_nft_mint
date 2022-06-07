import { utils } from 'ethers';
import OptimismCollectionConfig from './OptimismCollectionConfig';

const OptimismContractArguments = [
  OptimismCollectionConfig.tokenName,
  OptimismCollectionConfig.tokenSymbol,
  utils.parseEther(OptimismCollectionConfig.whitelistSale.price.toString()),
  OptimismCollectionConfig.whitelistSale.maxMintAmountPerTx,
  OptimismCollectionConfig.hiddenMetadataUri,
  OptimismCollectionConfig.maxSupply,
  OptimismCollectionConfig.startIndex,
  OptimismCollectionConfig.mainnet_lzEndPoint
] as const;

export default OptimismContractArguments;