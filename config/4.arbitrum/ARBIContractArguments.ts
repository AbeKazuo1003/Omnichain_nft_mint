import { utils } from 'ethers';
import ARBICollectionConfig from './ARBICollectionConfig';

const ARBIContractArguments = [
  ARBICollectionConfig.tokenName,
  ARBICollectionConfig.tokenSymbol,
  utils.parseEther(ARBICollectionConfig.publicSale.price.toString()),
  ARBICollectionConfig.publicSale.maxMintAmountPerTx,
  ARBICollectionConfig.hiddenMetadataUri,
  ARBICollectionConfig.maxSupply,
  ARBICollectionConfig.startIndex,
  ARBICollectionConfig.mainnet_lzEndPoint
] as const;

export default ARBIContractArguments;