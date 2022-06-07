import { utils } from 'ethers';
import EthereumCollectionConfig from './EthereumCollectionConfig';

const EthereumContractArguments = [
  EthereumCollectionConfig.tokenName,
  EthereumCollectionConfig.tokenSymbol,
  utils.parseEther(EthereumCollectionConfig.whitelistSale.price.toString()),
  EthereumCollectionConfig.whitelistSale.maxMintAmountPerTx,
  EthereumCollectionConfig.hiddenMetadataUri,
  EthereumCollectionConfig.maxSupply,
  EthereumCollectionConfig.startIndex,
  EthereumCollectionConfig.mainnet_lzEndPoint
] as const;

export default EthereumContractArguments;