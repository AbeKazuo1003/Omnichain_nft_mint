import AVAXCollectionConfig from './AVAXCollectionConfig';
import { utils } from 'ethers';

const AVAXTestContractArguments = [
  AVAXCollectionConfig.tokenName,
  AVAXCollectionConfig.tokenSymbol,
  utils.parseEther(AVAXCollectionConfig.publicSale.price.toString()),
  AVAXCollectionConfig.publicSale.maxMintAmountPerTx,
  AVAXCollectionConfig.hiddenMetadataUri,
  AVAXCollectionConfig.maxSupply,
  AVAXCollectionConfig.startIndex,
  AVAXCollectionConfig.testnet_lzEndPoint
] as const;

export default AVAXTestContractArguments;
