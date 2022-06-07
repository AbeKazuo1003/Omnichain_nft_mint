import CollectionConfigInterface from '../../lib/CollectionConfigInterface';

const LZ_ENDPOINTS = require('../../constants/layerzeroEndpoints.json');
const LZ_CHAINIDS = require('../../constants/chainIds.json');
import * as Networks from '../../lib/Networks';
import * as Marketplaces from '../../lib/Marketplaces';
import whitelistAddresses from '../whitelist.json';
import {
  AVAX_MAINNET_CONTRACT_ADDRESS,
  AVAX_MAX_SUPPLY,
  AVAX_PRESALE,
  AVAX_PUBLIC_SALE,
  AVAX_START_INDEX,
  AVAX_TESTNET_CONTRACT_ADDRESS,
  AVAX_WHITELIST_SALE,
  CONTRACT_NAME,
  HIDDEN_METADATA_URI,
  MARKET_PLACE_IDENTIFIER,
  TOKEN_NAME,
  TOKEN_SYMBOL
} from '../config';

const AVAXCollectionConfig: CollectionConfigInterface = {
  testnet: Networks.avalancheTestnet,
  mainnet: Networks.avalancheMainnet,
  contractName: CONTRACT_NAME,
  tokenName: TOKEN_NAME,
  tokenSymbol: TOKEN_SYMBOL,
  hiddenMetadataUri: HIDDEN_METADATA_URI,
  maxSupply: AVAX_MAX_SUPPLY,
  startIndex: AVAX_START_INDEX,
  whitelistSale: {
    price: AVAX_WHITELIST_SALE.price,
    maxMintAmountPerTx: AVAX_WHITELIST_SALE.maxMintAmountPerTx
  },
  preSale: {
    price: AVAX_PRESALE.price,
    maxMintAmountPerTx: AVAX_PRESALE.maxMintAmountPerTx
  },
  publicSale: {
    price: AVAX_PUBLIC_SALE.price,
    maxMintAmountPerTx: AVAX_PUBLIC_SALE.maxMintAmountPerTx
  },
  testNetContractAddress: AVAX_TESTNET_CONTRACT_ADDRESS,
  mainNetContractAddress: AVAX_MAINNET_CONTRACT_ADDRESS,
  marketplaceIdentifier: MARKET_PLACE_IDENTIFIER,
  marketplaceConfig: Marketplaces.openSea,
  mainnet_lzEndPoint: LZ_ENDPOINTS['avalanche'],
  testnet_lzEndPoint: LZ_ENDPOINTS['fuji'],
  mainnet_lzChainId: LZ_CHAINIDS['avalanche'],
  testnet_lzChainId: LZ_CHAINIDS['fuji'],
  whitelistAddresses
};

export default AVAXCollectionConfig;
