import { utils } from 'ethers';
import FantomCollectionConfig from './FantomCollectionConfig';

const FantomTestContractArguments = [
  FantomCollectionConfig.tokenName,
  FantomCollectionConfig.tokenSymbol,
  utils.parseEther(FantomCollectionConfig.whitelistSale.price.toString()),
  FantomCollectionConfig.whitelistSale.maxMintAmountPerTx,
  FantomCollectionConfig.hiddenMetadataUri,
  FantomCollectionConfig.maxSupply,
  FantomCollectionConfig.startIndex,
  FantomCollectionConfig.testnet_lzEndPoint
] as const;

export default FantomTestContractArguments;