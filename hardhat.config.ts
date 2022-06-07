import fs from "fs";
import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-contract-sizer";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import EthereumCollectionConfig from "./config/1.ethereum/EthereumCollectionConfig";

dotenv.config();

/*
 * If you have issues with stuck transactions or you simply want to invest in
 * higher gas fees in order to make sure your transactions will run smoother
 * and faster, then you can update the followind value.
 * This value is used by default in any network defined in this project, but
 * please make sure to add it manually if you define any custom network.
 *
 * Example:
 * Setting the value to "1.1" will raise the gas values by 10% compared to the
 * estimated value.
 */
const DEFAULT_GAS_MULTIPLIER: number = 1;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("generate-root-hash", "Generates and prints out the root hash for the current whitelist", async () => {
  // Check configuration
  if (EthereumCollectionConfig.whitelistAddresses.length < 1) {
    throw "The whitelist is empty, please add some addresses to the configuration.";
  }

  // Build the Merkle Tree
  const leafNodes = EthereumCollectionConfig.whitelistAddresses.map(addr => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const rootHash = "0x" + merkleTree.getRoot().toString("hex");

  console.log("The Merkle Tree root hash for the current whitelist is: " + rootHash);
});

task("generate-proof", "Generates and prints out the whitelist proof for the given address (compatible with block explorers such as Etherscan)", async (taskArgs: { address: string }) => {
  // Check configuration
  if (EthereumCollectionConfig.whitelistAddresses.length < 1) {
    throw "The whitelist is empty, please add some addresses to the configuration.";
  }

  // Build the Merkle Tree
  const leafNodes = EthereumCollectionConfig.whitelistAddresses.map(addr => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const proof = merkleTree.getHexProof(keccak256(taskArgs.address)).toString().replace(/'/g, "").replace(/ /g, "");

  console.log("The whitelist proof for the given address is: " + proof);
})
  .addParam("address", "The public address");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  // solidity: "0.8.9",
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false
  },
  networks: {
    truffle: {
      url: "http://localhost:24012/rpc",
      timeout: 60000,
      gasMultiplier: DEFAULT_GAS_MULTIPLIER
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/64cef4ed58bf4373a20ac2919e127d72",
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`],
      chainId: 4,
      gasMultiplier: DEFAULT_GAS_MULTIPLIER
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/64cef4ed58bf4373a20ac2919e127d72",
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`],
      chainId: 1,
      gasMultiplier: DEFAULT_GAS_MULTIPLIER
    },
    "bsc-testnet": {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`]
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`]
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`]
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 431114,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`]
    },
    "arbitrum-rinkeby": {
      url: "https://rinkeby.arbitrum.io/rpc",
      chainId: 421611,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`]
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      chainId: 42161,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`]
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`]
    },
    polygon: {
      url: "https://rpc-mainnet.matic.network",
      chainId: 137,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`]
    },
    "fantom-testnet": {
      url: "https://rpc.testnet.fantom.network/",
      chainId: 4002,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`]
    },
    fantom: {
      url: "https://rpc.ftm.tools/",
      chainId: 250,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`]
    },
    kovan: {
      url: "https://kovan.optimism.io",
      chainId: 69,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`]
    },
    optimism: {
      url: "https://mainnet.optimism.io",
      chainId: 10,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY!}`]
    }
  },
  etherscan: {
    apiKey: {
      //ethereum
      mainnet: process.env.ETHEREUM_API_KEY,
      rinkeby: process.env.ETHEREUM_API_KEY,
      // binance smart chain
      bsc: process.env.BSC_API_KEY,
      bscTestnet: process.env.BSC_API_KEY,
      // avalanche
      avalanche: process.env.AVAX_API_KEY,
      avalancheFujiTestnet: process.env.AVAX_API_KEY,
      // arbitrum
      arbitrumOne: process.env.ARBI_API_KEY,
      arbitrumTestnet: process.env.ARBI_API_KEY,
      // polygon
      polygon: process.env.POLYGON_API_KEY,
      polygonMumbai: process.env.POLYGON_API_KEY,
      // fantom mainnet
      opera: process.env.FANTOM_API_KEY,
      ftmTestnet: process.env.FANTOM_API_KEY,
      // optimism
      optimisticEthereum: process.env.OPTIMISM_API_KEY,
      optimisticKovan: process.env.OPTIMISM_API_KEY,
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    coinmarketcap: process.env.GAS_REPORTER_COIN_MARKET_CAP_API_KEY
  }
};

export default config;
