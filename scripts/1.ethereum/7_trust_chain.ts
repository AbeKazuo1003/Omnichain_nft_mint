import NftContractProvider from "../../lib/NftContractProvider";
import BSCCollectionConfig from "../../config/2.bsc/BSCCollectionConfig";
import AVAXCollectionConfig from "../../config/3.avalanche/AVAXCollectionConfig";
import ARBICollectionConfig from "../../config/4.arbitrum/ARBICollectionConfig";
import PolygonCollectionConfig from "../../config/5.polygon/PolygonCollectionConfig";
import FantomCollectionConfig from "../../config/6.fantom/FantomCollectionConfig";
import OptimismCollectionConfig from "../../config/7.optimism/OptimismCollectionConfig";

const hre = require("hardhat");

async function main() {
  const network = hre.network.name;
  const isMainnet = network === "mainnet";
  console.log("Ethereum SetTrustRemote Start...");
  // Attach to deployed contract
  const contract =
    network === "mainnet"
      ? await NftContractProvider.getEthereumMainnetContract()
      : await NftContractProvider.getEthereumTestnetContract();
  if (isMainnet) {
    console.log("Network: Mainnet");
    //1. BSC Network
    if (BSCCollectionConfig.mainNetContractAddress != null && BSCCollectionConfig.mainNetContractAddress !== "") {
      const chainId = BSCCollectionConfig.mainnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for BSC Network...");
        await (await contract.setTrustedRemote(chainId, BSCCollectionConfig.mainNetContractAddress)).wait();
        console.log(`BSC Network: ${chainId} => ${BSCCollectionConfig.mainNetContractAddress}`);
      }
    }

    //2. Avalanche Network
    if (AVAXCollectionConfig.mainNetContractAddress != null && AVAXCollectionConfig.mainNetContractAddress !== "") {
      const chainId = AVAXCollectionConfig.mainnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Avalanche Network...");
        await (await contract.setTrustedRemote(chainId, AVAXCollectionConfig.mainNetContractAddress)).wait();
        console.log(`Avalanche Network: ${chainId} => ${AVAXCollectionConfig.mainNetContractAddress}`);
      }
    }

    //3. Arbitrum Network
    if (ARBICollectionConfig.mainNetContractAddress != null && ARBICollectionConfig.mainNetContractAddress !== "") {
      const chainId = ARBICollectionConfig.mainnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Arbitrum Network...");
        await (await contract.setTrustedRemote(chainId, ARBICollectionConfig.mainNetContractAddress)).wait();
        console.log(`Arbitrum Network: ${chainId} => ${ARBICollectionConfig.mainNetContractAddress}`);
      }
    }

    //4. Polygon Network
    if (PolygonCollectionConfig.mainNetContractAddress != null && PolygonCollectionConfig.mainNetContractAddress !== "") {
      const chainId = PolygonCollectionConfig.mainnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Polygon Network...");
        await (await contract.setTrustedRemote(chainId, PolygonCollectionConfig.mainNetContractAddress)).wait();
        console.log(`Polygon Network: ${chainId} => ${PolygonCollectionConfig.mainNetContractAddress}`);
      }
    }

    //5. Fantom Network
    if (FantomCollectionConfig.mainNetContractAddress != null && FantomCollectionConfig.mainNetContractAddress !== "") {
      const chainId = FantomCollectionConfig.mainnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Fantom Network...");
        await (await contract.setTrustedRemote(chainId, FantomCollectionConfig.mainNetContractAddress)).wait();
        console.log(`Fantom Network: ${chainId} => ${FantomCollectionConfig.mainNetContractAddress}`);
      }
    }

    //6. Optimism Network
    if (OptimismCollectionConfig.mainNetContractAddress != null && OptimismCollectionConfig.mainNetContractAddress !== "") {
      const chainId = OptimismCollectionConfig.mainnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Optimism Network...");
        await (await contract.setTrustedRemote(chainId, OptimismCollectionConfig.mainNetContractAddress)).wait();
        console.log(`Optimism Network: ${chainId} => ${OptimismCollectionConfig.mainNetContractAddress}`);
      }
    }
  } else {
    console.log("Network: Testnet");
    //1. BSC Network
    if (BSCCollectionConfig.testNetContractAddress != null && BSCCollectionConfig.testNetContractAddress !== "") {
      const chainId = BSCCollectionConfig.testnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for BSC Network...");
        await (await contract.setTrustedRemote(chainId, BSCCollectionConfig.testNetContractAddress)).wait();
        console.log(`BSC Network: ${chainId} => ${BSCCollectionConfig.testNetContractAddress}`);
      }
    }

    //2. Avalanche Network
    if (AVAXCollectionConfig.testNetContractAddress != null && AVAXCollectionConfig.testNetContractAddress !== "") {
      const chainId = AVAXCollectionConfig.testnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Avalanche Network...");
        await (await contract.setTrustedRemote(chainId, AVAXCollectionConfig.testNetContractAddress)).wait();
        console.log(`Avalanche Network: ${chainId} => ${AVAXCollectionConfig.testNetContractAddress}`);
      }
    }

    //3. Arbitrum Network
    if (ARBICollectionConfig.testNetContractAddress != null && ARBICollectionConfig.testNetContractAddress !== "") {
      const chainId = ARBICollectionConfig.testnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Arbitrum Network...");
        await (await contract.setTrustedRemote(chainId, ARBICollectionConfig.testNetContractAddress)).wait();
        console.log(`Arbitrum Network: ${chainId} => ${ARBICollectionConfig.testNetContractAddress}`);
      }
    }

    //4. Polygon Network
    if (PolygonCollectionConfig.testNetContractAddress != null && PolygonCollectionConfig.testNetContractAddress !== "") {
      const chainId = PolygonCollectionConfig.testnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Polygon Network...");
        await (await contract.setTrustedRemote(chainId, PolygonCollectionConfig.testNetContractAddress)).wait();
        console.log(`Polygon Network: ${chainId} => ${PolygonCollectionConfig.testNetContractAddress}`);
      }
    }

    //5. Fantom Network
    if (FantomCollectionConfig.testNetContractAddress != null && FantomCollectionConfig.testNetContractAddress !== "") {
      const chainId = FantomCollectionConfig.testnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Fantom Network...");
        await (await contract.setTrustedRemote(chainId, FantomCollectionConfig.testNetContractAddress)).wait();
        console.log(`Fantom Network: ${chainId} => ${FantomCollectionConfig.testNetContractAddress}`);
      }
    }

    //6. Optimism Network
    if (OptimismCollectionConfig.testNetContractAddress != null && OptimismCollectionConfig.testNetContractAddress !== "") {
      const chainId = OptimismCollectionConfig.testnet_lzChainId;
      if ((await contract.getTrustedRemote(chainId)) == "0x") {
        console.log("Updating Trust Remote for Optimism Network...");
        await (await contract.setTrustedRemote(chainId, OptimismCollectionConfig.testNetContractAddress)).wait();
        console.log(`Optimism Network: ${chainId} => ${OptimismCollectionConfig.testNetContractAddress}`);
      }
    }
  }
  console.log("Ethereum SetTrustRemote Complete...");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
