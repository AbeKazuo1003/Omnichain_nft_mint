import ARBICollectionConfig from './ARBICollectionConfig';
import { utils } from 'ethers';

const ARBITestContractArguments = [
  ARBICollectionConfig.tokenName,
  ARBICollectionConfig.tokenSymbol,
  utils.parseEther(ARBICollectionConfig.publicSale.price.toString()),
  ARBICollectionConfig.publicSale.maxMintAmountPerTx,
  ARBICollectionConfig.hiddenMetadataUri,
  ARBICollectionConfig.maxSupply,
  ARBICollectionConfig.startIndex,
  ARBICollectionConfig.testnet_lzEndPoint
] as const;

export default ARBITestContractArguments;
