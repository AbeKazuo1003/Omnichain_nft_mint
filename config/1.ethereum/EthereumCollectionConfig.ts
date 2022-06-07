import CollectionConfigInterface from '../../lib/CollectionConfigInterface';

const LZ_ENDPOINTS = require('../../constants/layerzeroEndpoints.json');
const LZ_CHAINIDS = require('../../constants/chainIds.json');
import * as Networks from '../../lib/Networks';
import * as Marketplaces from '../../lib/Marketplaces';
import whitelistAddresses from '../whitelist.json';
import {
  CONTRACT_NAME,
  ETHEREUM_MAINNET_CONTRACT_ADDRESS,
  ETHEREUM_MAX_SUPPLY,
  ETHEREUM_PRESALE,
  ETHEREUM_PUBLIC_SALE,
  ETHEREUM_START_INDEX,
  ETHEREUM_TESTNET_CONTRACT_ADDRESS,
  ETHEREUM_WHITELIST_SALE,
  HIDDEN_METADATA_URI,
  MARKET_PLACE_IDENTIFIER,
  TOKEN_NAME,
  TOKEN_SYMBOL
} from '../config';

const EthereumCollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  contractName: CONTRACT_NAME,
  tokenName: TOKEN_NAME,
  tokenSymbol: TOKEN_SYMBOL,
  hiddenMetadataUri: HIDDEN_METADATA_URI,
  maxSupply: ETHEREUM_MAX_SUPPLY,
  startIndex: ETHEREUM_START_INDEX,
  whitelistSale: {
    price: ETHEREUM_WHITELIST_SALE.price,
    maxMintAmountPerTx: ETHEREUM_WHITELIST_SALE.maxMintAmountPerTx
  },
  preSale: {
    price: ETHEREUM_PRESALE.price,
    maxMintAmountPerTx: ETHEREUM_PRESALE.maxMintAmountPerTx
  },
  publicSale: {
    price: ETHEREUM_PUBLIC_SALE.price,
    maxMintAmountPerTx: ETHEREUM_PUBLIC_SALE.maxMintAmountPerTx
  },
  testNetContractAddress: ETHEREUM_TESTNET_CONTRACT_ADDRESS,
  mainNetContractAddress: ETHEREUM_MAINNET_CONTRACT_ADDRESS,
  marketplaceIdentifier: MARKET_PLACE_IDENTIFIER,
  marketplaceConfig: Marketplaces.openSea,
  mainnet_lzEndPoint: LZ_ENDPOINTS['ethereum'],
  testnet_lzEndPoint: LZ_ENDPOINTS['rinkeby'],
  mainnet_lzChainId: LZ_CHAINIDS['ethereum'],
  testnet_lzChainId: LZ_CHAINIDS['rinkeby'],
  whitelistAddresses
};

export default EthereumCollectionConfig;
