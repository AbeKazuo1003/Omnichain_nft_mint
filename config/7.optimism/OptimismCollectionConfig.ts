import CollectionConfigInterface from '../../lib/CollectionConfigInterface';

const LZ_ENDPOINTS = require('../../constants/layerzeroEndpoints.json');
const LZ_CHAINIDS = require('../../constants/chainIds.json');
import * as Networks from '../../lib/Networks';
import * as Marketplaces from '../../lib/Marketplaces';
import whitelistAddresses from '../whitelist.json';
import {
  CONTRACT_NAME,
  HIDDEN_METADATA_URI,
  MARKET_PLACE_IDENTIFIER,
  OPTI_MAINNET_CONTRACT_ADDRESS,
  OPTI_MAX_SUPPLY,
  OPTI_PRESALE,
  OPTI_PUBLIC_SALE,
  OPTI_START_INDEX,
  OPTI_TESTNET_CONTRACT_ADDRESS,
  OPTI_WHITELIST_SALE,
  TOKEN_NAME,
  TOKEN_SYMBOL
} from '../config';

const OptimismCollectionConfig: CollectionConfigInterface = {
  testnet: Networks.optimismTestnet,
  mainnet: Networks.optimismMainnet,
  contractName: CONTRACT_NAME,
  tokenName: TOKEN_NAME,
  tokenSymbol: TOKEN_SYMBOL,
  hiddenMetadataUri: HIDDEN_METADATA_URI,
  maxSupply: OPTI_MAX_SUPPLY,
  startIndex: OPTI_START_INDEX,
  whitelistSale: {
    price: OPTI_WHITELIST_SALE.price,
    maxMintAmountPerTx: OPTI_WHITELIST_SALE.maxMintAmountPerTx
  },
  preSale: {
    price: OPTI_PRESALE.price,
    maxMintAmountPerTx: OPTI_PRESALE.maxMintAmountPerTx
  },
  publicSale: {
    price: OPTI_PUBLIC_SALE.price,
    maxMintAmountPerTx: OPTI_PUBLIC_SALE.maxMintAmountPerTx
  },
  testNetContractAddress: OPTI_TESTNET_CONTRACT_ADDRESS,
  mainNetContractAddress: OPTI_MAINNET_CONTRACT_ADDRESS,
  marketplaceIdentifier: MARKET_PLACE_IDENTIFIER,
  marketplaceConfig: Marketplaces.openSea,
  mainnet_lzEndPoint: LZ_ENDPOINTS['fantom'],
  testnet_lzEndPoint: LZ_ENDPOINTS['fantom-testnet'],
  mainnet_lzChainId: LZ_CHAINIDS['optimism'],
  testnet_lzChainId: LZ_CHAINIDS['optimism-kovan'],
  whitelistAddresses
};

export default OptimismCollectionConfig;
