import { utils } from 'ethers';
import PolygonCollectionConfig from './PolygonCollectionConfig';

const PolygonTestContractArguments = [
  PolygonCollectionConfig.tokenName,
  PolygonCollectionConfig.tokenSymbol,
  utils.parseEther(PolygonCollectionConfig.whitelistSale.price.toString()),
  PolygonCollectionConfig.whitelistSale.maxMintAmountPerTx,
  PolygonCollectionConfig.hiddenMetadataUri,
  PolygonCollectionConfig.maxSupply,
  PolygonCollectionConfig.startIndex,
  PolygonCollectionConfig.testnet_lzEndPoint
] as const;

export default PolygonTestContractArguments;