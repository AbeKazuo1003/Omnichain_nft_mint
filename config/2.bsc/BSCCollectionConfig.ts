import CollectionConfigInterface from '../../lib/CollectionConfigInterface';

const LZ_ENDPOINTS = require('../../constants/layerzeroEndpoints.json');
const LZ_CHAINIDS = require('../../constants/chainIds.json');
import * as Networks from '../../lib/Networks';
import * as Marketplaces from '../../lib/Marketplaces';
import whitelistAddresses from '../whitelist.json';
import {
  BSC_MAINNET_CONTRACT_ADDRESS,
  BSC_MAX_SUPPLY,
  BSC_PRESALE,
  BSC_PUBLIC_SALE,
  BSC_START_INDEX,
  BSC_TESTNET_CONTRACT_ADDRESS,
  BSC_WHITELIST_SALE,
  CONTRACT_NAME,
  HIDDEN_METADATA_URI,
  MARKET_PLACE_IDENTIFIER,
  TOKEN_NAME,
  TOKEN_SYMBOL
} from '../config';

const BSCCollectionConfig: CollectionConfigInterface = {
  testnet: Networks.bscTestnet,
  mainnet: Networks.bscMainnet,
  contractName: CONTRACT_NAME,
  tokenName: TOKEN_NAME,
  tokenSymbol: TOKEN_SYMBOL,
  hiddenMetadataUri: HIDDEN_METADATA_URI,
  maxSupply: BSC_MAX_SUPPLY,
  startIndex: BSC_START_INDEX,
  whitelistSale: {
    price: BSC_WHITELIST_SALE.price,
    maxMintAmountPerTx: BSC_WHITELIST_SALE.maxMintAmountPerTx
  },
  preSale: {
    price: BSC_PRESALE.price,
    maxMintAmountPerTx: BSC_PRESALE.maxMintAmountPerTx
  },
  publicSale: {
    price: BSC_PUBLIC_SALE.price,
    maxMintAmountPerTx: BSC_PUBLIC_SALE.maxMintAmountPerTx
  },
  testNetContractAddress: BSC_TESTNET_CONTRACT_ADDRESS,
  mainNetContractAddress: BSC_MAINNET_CONTRACT_ADDRESS,
  marketplaceIdentifier: MARKET_PLACE_IDENTIFIER,
  marketplaceConfig: Marketplaces.openSea,
  mainnet_lzEndPoint: LZ_ENDPOINTS['bsc'],
  testnet_lzEndPoint: LZ_ENDPOINTS['bsc-testnet'],
  mainnet_lzChainId: LZ_CHAINIDS['bsc'],
  testnet_lzChainId: LZ_CHAINIDS['bsc-testnet'],
  whitelistAddresses
};

export default BSCCollectionConfig;
