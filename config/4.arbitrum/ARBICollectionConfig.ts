import CollectionConfigInterface from '../../lib/CollectionConfigInterface';

const LZ_ENDPOINTS = require('../../constants/layerzeroEndpoints.json');
const LZ_CHAINIDS = require('../../constants/chainIds.json');
import * as Networks from '../../lib/Networks';
import * as Marketplaces from '../../lib/Marketplaces';
import whitelistAddresses from '../whitelist.json';
import {
  ARBI_MAINNET_CONTRACT_ADDRESS,
  ARBI_MAX_SUPPLY,
  ARBI_PRESALE,
  ARBI_PUBLIC_SALE,
  ARBI_START_INDEX,
  ARBI_TESTNET_CONTRACT_ADDRESS,
  ARBI_WHITELIST_SALE,
  CONTRACT_NAME,
  HIDDEN_METADATA_URI,
  MARKET_PLACE_IDENTIFIER,
  TOKEN_NAME,
  TOKEN_SYMBOL
} from '../config';

const ARBICollectionConfig: CollectionConfigInterface = {
  testnet: Networks.arbitrumTestnet,
  mainnet: Networks.arbitrumMainnet,
  contractName: CONTRACT_NAME,
  tokenName: TOKEN_NAME,
  tokenSymbol: TOKEN_SYMBOL,
  hiddenMetadataUri: HIDDEN_METADATA_URI,
  maxSupply: ARBI_MAX_SUPPLY,
  startIndex: ARBI_START_INDEX,
  whitelistSale: {
    price: ARBI_WHITELIST_SALE.price,
    maxMintAmountPerTx: ARBI_WHITELIST_SALE.maxMintAmountPerTx
  },
  preSale: {
    price: ARBI_PRESALE.price,
    maxMintAmountPerTx: ARBI_PRESALE.maxMintAmountPerTx
  },
  publicSale: {
    price: ARBI_PUBLIC_SALE.price,
    maxMintAmountPerTx: ARBI_PUBLIC_SALE.maxMintAmountPerTx
  },
  testNetContractAddress: ARBI_TESTNET_CONTRACT_ADDRESS,
  mainNetContractAddress: ARBI_MAINNET_CONTRACT_ADDRESS,
  marketplaceIdentifier: MARKET_PLACE_IDENTIFIER,
  marketplaceConfig: Marketplaces.openSea,
  mainnet_lzEndPoint: LZ_ENDPOINTS['arbitrum'],
  testnet_lzEndPoint: LZ_ENDPOINTS['arbitrum-rinkeby'],
  mainnet_lzChainId: LZ_CHAINIDS['arbitrum'],
  testnet_lzChainId: LZ_CHAINIDS['arbitrum-rinkeby'],
  whitelistAddresses
};

export default ARBICollectionConfig;
