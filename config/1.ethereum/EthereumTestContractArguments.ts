import EthereumCollectionConfig from './EthereumCollectionConfig';
import { utils } from 'ethers';

const EthereumTestContractArguments = [
  EthereumCollectionConfig.tokenName,
  EthereumCollectionConfig.tokenSymbol,
  utils.parseEther(EthereumCollectionConfig.whitelistSale.price.toString()),
  EthereumCollectionConfig.whitelistSale.maxMintAmountPerTx,
  EthereumCollectionConfig.hiddenMetadataUri,
  EthereumCollectionConfig.maxSupply,
  EthereumCollectionConfig.startIndex,
  EthereumCollectionConfig.testnet_lzEndPoint
] as const;

export default EthereumTestContractArguments;
