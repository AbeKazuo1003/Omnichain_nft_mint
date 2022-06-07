import CollectionConfigInterface from '../../lib/CollectionConfigInterface';

const LZ_ENDPOINTS = require('../../constants/layerzeroEndpoints.json');
const LZ_CHAINIDS = require('../../constants/chainIds.json');
import * as Networks from '../../lib/Networks';
import * as Marketplaces from '../../lib/Marketplaces';
import whitelistAddresses from '../whitelist.json';
import {
  CONTRACT_NAME,
  FANTOM_MAINNET_CONTRACT_ADDRESS,
  FANTOM_MAX_SUPPLY,
  FANTOM_PRESALE,
  FANTOM_PUBLIC_SALE,
  FANTOM_START_INDEX,
  FANTOM_TESTNET_CONTRACT_ADDRESS,
  FANTOM_WHITELIST_SALE,
  HIDDEN_METADATA_URI,
  MARKET_PLACE_IDENTIFIER,
  TOKEN_NAME,
  TOKEN_SYMBOL
} from '../config';

const FantomCollectionConfig: CollectionConfigInterface = {
  testnet: Networks.fantomTestnet,
  mainnet: Networks.fantomMainnet,
  contractName: CONTRACT_NAME,
  tokenName: TOKEN_NAME,
  tokenSymbol: TOKEN_SYMBOL,
  hiddenMetadataUri: HIDDEN_METADATA_URI,
  maxSupply: FANTOM_MAX_SUPPLY,
  startIndex: FANTOM_START_INDEX,
  whitelistSale: {
    price: FANTOM_WHITELIST_SALE.price,
    maxMintAmountPerTx: FANTOM_WHITELIST_SALE.maxMintAmountPerTx
  },
  preSale: {
    price: FANTOM_PRESALE.price,
    maxMintAmountPerTx: FANTOM_PRESALE.maxMintAmountPerTx
  },
  publicSale: {
    price: FANTOM_PUBLIC_SALE.price,
    maxMintAmountPerTx: FANTOM_PUBLIC_SALE.maxMintAmountPerTx
  },
  testNetContractAddress: FANTOM_TESTNET_CONTRACT_ADDRESS,
  mainNetContractAddress: FANTOM_MAINNET_CONTRACT_ADDRESS,
  marketplaceIdentifier: MARKET_PLACE_IDENTIFIER,
  marketplaceConfig: Marketplaces.openSea,
  mainnet_lzEndPoint: LZ_ENDPOINTS['fantom'],
  testnet_lzEndPoint: LZ_ENDPOINTS['fantom-testnet'],
  mainnet_lzChainId: LZ_CHAINIDS['fantom'],
  testnet_lzChainId: LZ_CHAINIDS['fantom-testnet'],
  whitelistAddresses
};

export default FantomCollectionConfig;
