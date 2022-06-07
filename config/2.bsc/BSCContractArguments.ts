import { utils } from 'ethers';
import BSCCollectionConfig from './BSCCollectionConfig';

const BSCContractArguments = [
  BSCCollectionConfig.tokenName,
  BSCCollectionConfig.tokenSymbol,
  utils.parseEther(BSCCollectionConfig.publicSale.price.toString()),
  BSCCollectionConfig.publicSale.maxMintAmountPerTx,
  BSCCollectionConfig.hiddenMetadataUri,
  BSCCollectionConfig.maxSupply,
  BSCCollectionConfig.startIndex,
  BSCCollectionConfig.mainnet_lzEndPoint
] as const;

export default BSCContractArguments;