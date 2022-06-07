// The name below ("HumanKindNftMint") should match the name of your Solidity contract.
// It can be updated using the following command:
// yarn rename-contract NEW_CONTRACT_NAME
// Please DO NOT change it manually!
import { HumanKindNftMint as ContractType } from "../typechain/index";

import { ethers } from "hardhat";
import EthereumCollectionConfig from "../config/1.ethereum/EthereumCollectionConfig";
import BSCCollectionConfig from "../config/2.bsc/BSCCollectionConfig";
import AVAXCollectionConfig from "../config/3.avalanche/AVAXCollectionConfig";
import ARBICollectionConfig from "../config/4.arbitrum/ARBICollectionConfig";
import PolygonCollectionConfig from "../config/5.polygon/PolygonCollectionConfig";
import FantomCollectionConfig from "../config/6.fantom/FantomCollectionConfig";
import OptimismCollectionConfig from "../config/7.optimism/OptimismCollectionConfig";

export default class NftContractProvider {

  //---------1. Ethereum---------------------------
  public static async getEthereumMainnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === EthereumCollectionConfig.mainNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(EthereumCollectionConfig.mainNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${EthereumCollectionConfig.mainNetContractAddress}`;
    }
    return await ethers.getContractAt(EthereumCollectionConfig.contractName, EthereumCollectionConfig.mainNetContractAddress) as ContractType;
  }

  public static async getEthereumTestnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === EthereumCollectionConfig.testNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(EthereumCollectionConfig.testNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${EthereumCollectionConfig.testNetContractAddress}`;
    }
    return await ethers.getContractAt(EthereumCollectionConfig.contractName, EthereumCollectionConfig.testNetContractAddress) as ContractType;
  }

  //---------2. BSC---------------------------
  public static async getBSCMainnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === BSCCollectionConfig.mainNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(BSCCollectionConfig.mainNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${BSCCollectionConfig.mainNetContractAddress}`;
    }
    return await ethers.getContractAt(BSCCollectionConfig.contractName, BSCCollectionConfig.mainNetContractAddress) as ContractType;
  }

  public static async getBSCTestnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === BSCCollectionConfig.testNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(BSCCollectionConfig.testNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${BSCCollectionConfig.testNetContractAddress}`;
    }
    return await ethers.getContractAt(BSCCollectionConfig.contractName, BSCCollectionConfig.testNetContractAddress) as ContractType;
  }

  //---------3. Avalanche---------------------------
  public static async getAVAXMainnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === AVAXCollectionConfig.mainNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(AVAXCollectionConfig.mainNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${AVAXCollectionConfig.mainNetContractAddress}`;
    }
    return await ethers.getContractAt(AVAXCollectionConfig.contractName, AVAXCollectionConfig.mainNetContractAddress) as ContractType;
  }

  public static async getAVAXTestnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === AVAXCollectionConfig.testNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(AVAXCollectionConfig.testNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${AVAXCollectionConfig.testNetContractAddress}`;
    }
    return await ethers.getContractAt(AVAXCollectionConfig.contractName, AVAXCollectionConfig.testNetContractAddress) as ContractType;
  }

  //---------4. Arbitrum---------------------------
  public static async getARBIMainnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === ARBICollectionConfig.mainNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(ARBICollectionConfig.mainNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${ARBICollectionConfig.mainNetContractAddress}`;
    }
    return await ethers.getContractAt(ARBICollectionConfig.contractName, ARBICollectionConfig.mainNetContractAddress) as ContractType;
  }

  public static async getARBITestnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === ARBICollectionConfig.testNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(ARBICollectionConfig.testNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${ARBICollectionConfig.testNetContractAddress}`;
    }
    return await ethers.getContractAt(ARBICollectionConfig.contractName, ARBICollectionConfig.testNetContractAddress) as ContractType;
  }

  //---------5. Polygon---------------------------
  public static async getPolygonMainnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === PolygonCollectionConfig.mainNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(PolygonCollectionConfig.mainNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${PolygonCollectionConfig.mainNetContractAddress}`;
    }
    return await ethers.getContractAt(PolygonCollectionConfig.contractName, PolygonCollectionConfig.mainNetContractAddress) as ContractType;
  }

  public static async getPolygonTestnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === PolygonCollectionConfig.testNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(PolygonCollectionConfig.testNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${PolygonCollectionConfig.testNetContractAddress}`;
    }
    return await ethers.getContractAt(PolygonCollectionConfig.contractName, PolygonCollectionConfig.testNetContractAddress) as ContractType;
  }

  //---------6. Fantom---------------------------
  public static async getFantomMainnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === FantomCollectionConfig.mainNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(FantomCollectionConfig.mainNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${FantomCollectionConfig.mainNetContractAddress}`;
    }
    return await ethers.getContractAt(FantomCollectionConfig.contractName, FantomCollectionConfig.mainNetContractAddress) as ContractType;
  }

  public static async getFantomTestnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === FantomCollectionConfig.testNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(FantomCollectionConfig.testNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${FantomCollectionConfig.testNetContractAddress}`;
    }
    return await ethers.getContractAt(FantomCollectionConfig.contractName, FantomCollectionConfig.testNetContractAddress) as ContractType;
  }

  //---------7. Optimism---------------------------
  public static async getOPTIMainnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === OptimismCollectionConfig.mainNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(OptimismCollectionConfig.mainNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${OptimismCollectionConfig.mainNetContractAddress}`;
    }
    return await ethers.getContractAt(OptimismCollectionConfig.contractName, OptimismCollectionConfig.mainNetContractAddress) as ContractType;
  }

  public static async getOPTITestnetContract(): Promise<ContractType> {
    // Check configuration
    if (null === OptimismCollectionConfig.testNetContractAddress) {
      throw "\x1b[31merror\x1b[0m " + "Please add the contract address to the configuration before running this command.";
    }
    if (await ethers.provider.getCode(OptimismCollectionConfig.testNetContractAddress) === "0x") {
      throw "\x1b[31merror\x1b[0m " + `Can't find a contract deployed to the target address: ${OptimismCollectionConfig.testNetContractAddress}`;
    }
    return await ethers.getContractAt(OptimismCollectionConfig.contractName, OptimismCollectionConfig.testNetContractAddress) as ContractType;
  }


};

export type NftContractType = ContractType;
