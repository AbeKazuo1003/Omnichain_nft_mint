import BSCCollectionConfig from './BSCCollectionConfig';
import { utils } from 'ethers';

const BSCTestContractArguments = [
  BSCCollectionConfig.tokenName,
  BSCCollectionConfig.tokenSymbol,
  utils.parseEther(BSCCollectionConfig.publicSale.price.toString()),
  BSCCollectionConfig.publicSale.maxMintAmountPerTx,
  BSCCollectionConfig.hiddenMetadataUri,
  BSCCollectionConfig.maxSupply,
  BSCCollectionConfig.startIndex,
  BSCCollectionConfig.testnet_lzEndPoint
] as const;

export default BSCTestContractArguments;
