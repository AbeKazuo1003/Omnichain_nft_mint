import { utils } from 'ethers';
import AVAXCollectionConfig from './AVAXCollectionConfig';

const AVAXContractArguments = [
  AVAXCollectionConfig.tokenName,
  AVAXCollectionConfig.tokenSymbol,
  utils.parseEther(AVAXCollectionConfig.publicSale.price.toString()),
  AVAXCollectionConfig.publicSale.maxMintAmountPerTx,
  AVAXCollectionConfig.hiddenMetadataUri,
  AVAXCollectionConfig.maxSupply,
  AVAXCollectionConfig.startIndex,
  AVAXCollectionConfig.testnet_lzEndPoint
] as const;

export default AVAXContractArguments;