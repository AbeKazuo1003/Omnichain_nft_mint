import { utils } from 'ethers';
import PolygonCollectionConfig from './PolygonCollectionConfig';

const PolygonContractArguments = [
  PolygonCollectionConfig.tokenName,
  PolygonCollectionConfig.tokenSymbol,
  utils.parseEther(PolygonCollectionConfig.whitelistSale.price.toString()),
  PolygonCollectionConfig.whitelistSale.maxMintAmountPerTx,
  PolygonCollectionConfig.hiddenMetadataUri,
  PolygonCollectionConfig.maxSupply,
  PolygonCollectionConfig.startIndex,
  PolygonCollectionConfig.mainnet_lzEndPoint
] as const;

export default PolygonContractArguments;