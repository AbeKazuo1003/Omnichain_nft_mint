import NftContractProvider from "../../lib/NftContractProvider";
import BSCCollectionConfig from "../../config/2.bsc/BSCCollectionConfig";
import ARBICollectionConfig from "../../config/4.arbitrum/ARBICollectionConfig";
import OptimismCollectionConfig from "../../config/7.optimism/OptimismCollectionConfig";
import EthereumCollectionConfig from "../../config/1.ethereum/EthereumCollectionConfig";
import AVAXCollectionConfig from "../../config/3.avalanche/AVAXCollectionConfig";
import PolygonCollectionConfig from "../../config/5.polygon/PolygonCollectionConfig";
import FantomCollectionConfig from "../../config/6.fantom/FantomCollectionConfig";

const hre = require("hardhat");

async function main() {
  const network = hre.network.name;
  const isMainnet = network === "optimism";
  console.log("Optimism SetTrustRemote Start...");
  // Attach to deployed contract
  const contract =
    network === "optimism"
      ? await NftContractProvider.getOPTIMainnetContract()
      : await NftContractProvider.getOPTITestnetContract();
  if (isMainnet) {
    console.log("Network: Mainnet");
    //1. Ethereum Network
    if (EthereumCollectionConfig.mainNetContractAddress != null && EthereumCollectionConfig.mainNetContractAddress !== "") {
      const chainId = EthereumCollectionConfig.mainnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Ethereum Network...");
        await (await contract.setTrustedRemote(chainId, EthereumCollectionConfig.mainNetContractAddress)).wait();
        console.log(`Ethereum Network: ${chainId} => ${EthereumCollectionConfig.mainNetContractAddress}`);
      }
    }

    //2. BSC Network
    if (BSCCollectionConfig.mainNetContractAddress != null && BSCCollectionConfig.mainNetContractAddress !== "") {
      const chainId = BSCCollectionConfig.mainnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for BSC Network...");
        await (await contract.setTrustedRemote(chainId, BSCCollectionConfig.mainNetContractAddress)).wait();
        console.log(`BSC Network: ${chainId} => ${BSCCollectionConfig.mainNetContractAddress}`);
      }
    }

    //3. Avalanche Network
    if (AVAXCollectionConfig.mainNetContractAddress != null && AVAXCollectionConfig.mainNetContractAddress !== "") {
      const chainId = AVAXCollectionConfig.mainnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Avalanche Network...");
        await (await contract.setTrustedRemote(chainId, AVAXCollectionConfig.mainNetContractAddress)).wait();
        console.log(`Avalanche Network: ${chainId} => ${AVAXCollectionConfig.mainNetContractAddress}`);
      }
    }

    //4. Arbitrum Network
    if (ARBICollectionConfig.mainNetContractAddress != null && ARBICollectionConfig.mainNetContractAddress !== "") {
      const chainId = ARBICollectionConfig.mainnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Arbitrum Network...");
        await (await contract.setTrustedRemote(chainId, ARBICollectionConfig.mainNetContractAddress)).wait();
        console.log(`Arbitrum Network: ${chainId} => ${ARBICollectionConfig.mainNetContractAddress}`);
      }
    }

    //5. Polygon Network
    if (PolygonCollectionConfig.mainNetContractAddress != null && PolygonCollectionConfig.mainNetContractAddress !== "") {
      const chainId = PolygonCollectionConfig.mainnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Polygon Network...");
        await (await contract.setTrustedRemote(chainId, PolygonCollectionConfig.mainNetContractAddress)).wait();
        console.log(`Polygon Network: ${chainId} => ${PolygonCollectionConfig.mainNetContractAddress}`);
      }
    }

    //6. Fantom Network
    if (FantomCollectionConfig.mainNetContractAddress != null && FantomCollectionConfig.mainNetContractAddress !== "") {
      const chainId = FantomCollectionConfig.mainnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Fantom Network...");
        await (await contract.setTrustedRemote(chainId, FantomCollectionConfig.mainNetContractAddress)).wait();
        console.log(`Fantom Network: ${chainId} => ${FantomCollectionConfig.mainNetContractAddress}`);
      }
    }
  } else {
    console.log("Network: Testnet");
    //1. Ethereum Network
    if (EthereumCollectionConfig.testNetContractAddress != null && EthereumCollectionConfig.testNetContractAddress !== "") {
      const chainId = EthereumCollectionConfig.testnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Ethereum Network...");
        await (await contract.setTrustedRemote(chainId, EthereumCollectionConfig.testNetContractAddress)).wait();
        console.log(`Ethereum Network: ${chainId} => ${EthereumCollectionConfig.testNetContractAddress}`);
      }
    }

    //2. BSC Network
    if (BSCCollectionConfig.testNetContractAddress != null && BSCCollectionConfig.testNetContractAddress !== "") {
      const chainId = BSCCollectionConfig.testnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for BSC Network...");
        await (await contract.setTrustedRemote(chainId, BSCCollectionConfig.testNetContractAddress)).wait();
        console.log(`BSC Network: ${chainId} => ${BSCCollectionConfig.testNetContractAddress}`);
      }
    }

    //3. Avalanche Network
    if (AVAXCollectionConfig.testNetContractAddress != null && AVAXCollectionConfig.testNetContractAddress !== "") {
      const chainId = AVAXCollectionConfig.testnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Avalanche Network...");
        await (await contract.setTrustedRemote(chainId, AVAXCollectionConfig.testNetContractAddress)).wait();
        console.log(`Avalanche Network: ${chainId} => ${AVAXCollectionConfig.testNetContractAddress}`);
      }
    }

    //4. Arbitrum Network
    if (ARBICollectionConfig.testNetContractAddress != null && ARBICollectionConfig.testNetContractAddress !== "") {
      const chainId = ARBICollectionConfig.testnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Arbitrum Network...");
        await (await contract.setTrustedRemote(chainId, ARBICollectionConfig.testNetContractAddress)).wait();
        console.log(`Arbitrum Network: ${chainId} => ${ARBICollectionConfig.testNetContractAddress}`);
      }
    }

    //5. Polygon Network
    if (PolygonCollectionConfig.testNetContractAddress != null && PolygonCollectionConfig.testNetContractAddress !== "") {
      const chainId = PolygonCollectionConfig.testnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Polygon Network...");
        await (await contract.setTrustedRemote(chainId, PolygonCollectionConfig.testNetContractAddress)).wait();
        console.log(`Polygon Network: ${chainId} => ${PolygonCollectionConfig.testNetContractAddress}`);
      }
    }

    //6. Fantom Network
    if (FantomCollectionConfig.testNetContractAddress != null && FantomCollectionConfig.testNetContractAddress !== "") {
      const chainId = FantomCollectionConfig.testnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Fantom Network...");
        await (await contract.setTrustedRemote(chainId, FantomCollectionConfig.testNetContractAddress)).wait();
        console.log(`Fantom Network: ${chainId} => ${FantomCollectionConfig.testNetContractAddress}`);
      }
    }
  }
  console.log("Optimism SetTrustRemote Complete...");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
