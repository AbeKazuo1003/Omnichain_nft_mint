import NftContractProvider from "../../lib/NftContractProvider";

const { ethers } = require("ethers");

const hre = require("hardhat");

async function main() {
  const network = hre.network.name;
  const contract =
    network === "bsc"
      ? await NftContractProvider.getBSCMainnetContract()
      : await NftContractProvider.getBSCTestnetContract();
  console.log("BSC Network");
  // @ts-ignore
  const test: any = await contract.estimateSendFee(
    10009,
    "0xE6AD954a9B14b45816C45afE7Dc0E9F85819E010",
    ethers.BigNumber.from("4001"),
    true,
    // @ts-ignore
    //{ value: ethers.utils.parseEther("1") }
    // Zero Account 0x0000000000000000000000000000000000000000
    '0x'
  );
  console.log(test);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});