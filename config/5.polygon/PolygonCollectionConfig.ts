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
  POLYGON_MAINNET_CONTRACT_ADDRESS,
  POLYGON_MAX_SUPPLY,
  POLYGON_PRESALE,
  POLYGON_PUBLIC_SALE,
  POLYGON_START_INDEX,
  POLYGON_TESTNET_CONTRACT_ADDRESS,
  POLYGON_WHITELIST_SALE,
  TOKEN_NAME,
  TOKEN_SYMBOL
} from '../config';

const PolygonCollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  contractName: CONTRACT_NAME,
  tokenName: TOKEN_NAME,
  tokenSymbol: TOKEN_SYMBOL,
  hiddenMetadataUri: HIDDEN_METADATA_URI,
  maxSupply: POLYGON_MAX_SUPPLY,
  startIndex: POLYGON_START_INDEX,
  whitelistSale: {
    price: POLYGON_WHITELIST_SALE.price,
    maxMintAmountPerTx: POLYGON_WHITELIST_SALE.maxMintAmountPerTx
  },
  preSale: {
    price: POLYGON_PRESALE.price,
    maxMintAmountPerTx: POLYGON_PRESALE.maxMintAmountPerTx
  },
  publicSale: {
    price: POLYGON_PUBLIC_SALE.price,
    maxMintAmountPerTx: POLYGON_PUBLIC_SALE.maxMintAmountPerTx
  },
  testNetContractAddress: POLYGON_TESTNET_CONTRACT_ADDRESS,
  mainNetContractAddress: POLYGON_MAINNET_CONTRACT_ADDRESS,
  marketplaceIdentifier: MARKET_PLACE_IDENTIFIER,
  marketplaceConfig: Marketplaces.openSea,
  mainnet_lzEndPoint: LZ_ENDPOINTS['polygon'],
  testnet_lzEndPoint: LZ_ENDPOINTS['mumbai'],
  mainnet_lzChainId: LZ_CHAINIDS['polygon'],
  testnet_lzChainId: LZ_CHAINIDS['mumbai'],
  whitelistAddresses
};

export default PolygonCollectionConfig;
