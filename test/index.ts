/*
import chai, { expect } from "chai";
import ChaiAsPromised from "chai-as-promised";
import { BigNumber, utils } from "ethers";
import { ethers } from "hardhat";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import CollectionConfig from "./../config/CollectionConfig";
import ContractArguments from "../config/ContractArguments";
import { NftContractType } from "../lib/NftContractProvider";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

chai.use(ChaiAsPromised);

enum SaleType {
  WHITELIST = CollectionConfig.whitelistSale.price,
  PRE_SALE = CollectionConfig.preSale.price,
  PUBLIC_SALE = CollectionConfig.publicSale.price,
};

const whitelistAddresses = [
  // Hardhat test addresses...
  "0xE6AD954a9B14b45816C45afE7Dc0E9F85819E010",
  "0x538D1bfA5ae1788C24c5f163979Ad9541b413fAA",
  "0x4B87873B8b49A59907666faeC211dBb2c8120f35"
];

function getPrice(saleType: SaleType, mintAmount: number) {
  return utils.parseEther(saleType.toString()).mul(mintAmount);
}

describe(CollectionConfig.contractName, function() {
  let owner!: SignerWithAddress;
  let whitelistedUser!: SignerWithAddress;
  let holder!: SignerWithAddress;
  let externalUser!: SignerWithAddress;
  let contract!: NftContractType;

  before(async function() {
    [owner, whitelistedUser, holder, externalUser] = await ethers.getSigners();
  });

  it("Contract deployment", async function() {
    const Contract = await ethers.getContractFactory(CollectionConfig.contractName);
    contract = await Contract.deploy(...ContractArguments) as NftContractType;

    await contract.deployed();
    console.log(owner.address);
    console.log(whitelistedUser.address);
    console.log(holder.address);
    console.log(externalUser.address);
  });

  it("Check initial data", async function() {
    expect(await contract.name()).to.equal(CollectionConfig.tokenName);
    expect(await contract.symbol()).to.equal(CollectionConfig.tokenSymbol);
    expect(await contract.cost()).to.equal(getPrice(SaleType.WHITELIST, 1));
    expect(await contract.maxSupply()).to.equal(CollectionConfig.maxSupply);
    expect(await contract.maxMintAmountPerTx()).to.equal(CollectionConfig.whitelistSale.maxMintAmountPerTx);
    expect(await contract.hiddenMetadataUri()).to.equal(CollectionConfig.hiddenMetadataUri);

    expect(await contract.paused()).to.equal(true);
    expect(await contract.whitelistMintEnabled()).to.equal(false);
    expect(await contract.revealed()).to.equal(false);

    await expect(contract.tokenURI(1)).to.be.revertedWith("ERC721Metadata: URI query for nonexistent token");
  });

  it("Before any sale", async function() {
    // Nobody should be able to mint from a paused contract
    await expect(contract.connect(whitelistedUser).mint(1, { value: getPrice(SaleType.WHITELIST, 1) })).to.be.revertedWith("The contract is paused!");
    await expect(contract.connect(whitelistedUser).whitelistMint(1, [], { value: getPrice(SaleType.WHITELIST, 1) })).to.be.revertedWith("The whitelist sale is not enabled!");
    await expect(contract.connect(holder).mint(1, { value: getPrice(SaleType.WHITELIST, 1) })).to.be.revertedWith("The contract is paused!");
    await expect(contract.connect(holder).whitelistMint(1, [], { value: getPrice(SaleType.WHITELIST, 1) })).to.be.revertedWith("The whitelist sale is not enabled!");
    await expect(contract.connect(owner).mint(1, { value: getPrice(SaleType.WHITELIST, 1) })).to.be.revertedWith("The contract is paused!");
    await expect(contract.connect(owner).whitelistMint(1, [], { value: getPrice(SaleType.WHITELIST, 1) })).to.be.revertedWith("The whitelist sale is not enabled!");

    // The owner should always be able to run mintForAddress
    await (await contract.mintForAddress(1, await owner.getAddress())).wait();
    await (await contract.mintForAddress(1, await whitelistedUser.getAddress())).wait();
    // But not over the maxMintAmountPerTx
    await expect(contract.mintForAddress(
      await (await contract.maxMintAmountPerTx()).add(1),
      await holder.getAddress()
    )).to.be.revertedWith("Invalid mint amount!");

    // Check balances
    expect(await contract.balanceOf(await owner.getAddress())).to.equal(1);
    expect(await contract.balanceOf(await whitelistedUser.getAddress())).to.equal(1);
    expect(await contract.balanceOf(await holder.getAddress())).to.equal(0);
    expect(await contract.balanceOf(await externalUser.getAddress())).to.equal(0);
  });

  it("Whitelist sale", async function() {
    // Build MerkleTree
    const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const rootHash = merkleTree.getRoot();
    // Update the root hash
    await (await contract.setMerkleRoot("0x" + rootHash.toString("hex"))).wait();

    await contract.setWhitelistMintEnabled(true);

    await contract.connect(whitelistedUser).whitelistMint(
      1,
      merkleTree.getHexProof(keccak256(await whitelistedUser.getAddress())),
      { value: getPrice(SaleType.WHITELIST, 1) }
    );
    // Trying to mint twice
    await expect(contract.connect(whitelistedUser).whitelistMint(
      1,
      merkleTree.getHexProof(keccak256(await whitelistedUser.getAddress())),
      { value: getPrice(SaleType.WHITELIST, 1) }
    )).to.be.revertedWith("Address already claimed!");
    // Sending an invalid mint amount
    await expect(contract.connect(whitelistedUser).whitelistMint(
      await (await contract.maxMintAmountPerTx()).add(1),
      merkleTree.getHexProof(keccak256(await whitelistedUser.getAddress())),
      { value: getPrice(SaleType.WHITELIST, await (await contract.maxMintAmountPerTx()).add(1).toNumber()) }
    )).to.be.revertedWith("Invalid mint amount!");
    // Sending insufficient funds
    await expect(contract.connect(whitelistedUser).whitelistMint(
      1,
      merkleTree.getHexProof(keccak256(await whitelistedUser.getAddress())),
      { value: getPrice(SaleType.WHITELIST, 1).sub(1) }
    )).to.be.rejectedWith(Error, "insufficient funds for intrinsic transaction cost");
    // Pretending to be someone else
    await expect(contract.connect(holder).whitelistMint(
      1,
      merkleTree.getHexProof(keccak256(await whitelistedUser.getAddress())),
      { value: getPrice(SaleType.WHITELIST, 1) }
    )).to.be.revertedWith("Invalid proof!");
    // Sending an invalid proof
    await expect(contract.connect(holder).whitelistMint(
      1,
      merkleTree.getHexProof(keccak256(await holder.getAddress())),
      { value: getPrice(SaleType.WHITELIST, 1) }
    )).to.be.revertedWith("Invalid proof!");
    // Sending no proof at all
    await expect(contract.connect(holder).whitelistMint(
      1,
      [],
      { value: getPrice(SaleType.WHITELIST, 1) }
    )).to.be.revertedWith("Invalid proof!");

    // Pause whitelist sale
    await contract.setWhitelistMintEnabled(false);
    await contract.setCost(utils.parseEther(CollectionConfig.preSale.price.toString()));

    // Check balances
    expect(await contract.balanceOf(await owner.getAddress())).to.equal(1);
    expect(await contract.balanceOf(await whitelistedUser.getAddress())).to.equal(2);
    expect(await contract.balanceOf(await holder.getAddress())).to.equal(0);
    expect(await contract.balanceOf(await externalUser.getAddress())).to.equal(0);
  });

  it("Pre-sale (same as public sale)", async function() {
    await contract.setMaxMintAmountPerTx(CollectionConfig.preSale.maxMintAmountPerTx);
    await contract.setPaused(false);
    await contract.connect(holder).mint(2, { value: getPrice(SaleType.PRE_SALE, 2) });
    await contract.connect(whitelistedUser).mint(1, { value: getPrice(SaleType.PRE_SALE, 1) });
    // Sending insufficient funds
    await expect(contract.connect(holder).mint(1, { value: getPrice(SaleType.PRE_SALE, 1).sub(1) })).to.be.rejectedWith(Error, "insufficient funds for intrinsic transaction cost");
    // Sending an invalid mint amount
    await expect(contract.connect(whitelistedUser).mint(
      await (await contract.maxMintAmountPerTx()).add(1),
      { value: getPrice(SaleType.PRE_SALE, await (await contract.maxMintAmountPerTx()).add(1).toNumber()) }
    )).to.be.revertedWith("Invalid mint amount!");
    // Sending a whitelist mint transaction
    await expect(contract.connect(whitelistedUser).whitelistMint(
      1,
      [],
      { value: getPrice(SaleType.WHITELIST, 1) }
    )).to.be.rejectedWith(Error, "insufficient funds for intrinsic transaction cost");

    // Pause pre-sale
    await contract.setPaused(true);
    await contract.setCost(utils.parseEther(CollectionConfig.publicSale.price.toString()));
  });

  it("Owner only functions", async function() {
    await expect(contract.connect(externalUser).mintForAddress(1, await externalUser.getAddress())).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(contract.connect(externalUser).setRevealed(false)).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(contract.connect(externalUser).setCost(utils.parseEther("0.0000001"))).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(contract.connect(externalUser).setMaxMintAmountPerTx(99999)).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(contract.connect(externalUser).setHiddenMetadataUri("INVALID_URI")).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(contract.connect(externalUser).setUriPrefix("INVALID_PREFIX")).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(contract.connect(externalUser).setUriSuffix("INVALID_SUFFIX")).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(contract.connect(externalUser).setPaused(false)).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(contract.connect(externalUser).setMerkleRoot("0x0000000000000000000000000000000000000000000000000000000000000000")).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(contract.connect(externalUser).setWhitelistMintEnabled(false)).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(contract.connect(externalUser).withdraw()).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("Wallet of owner", async function() {
    expect(await contract.walletOfOwner(await owner.getAddress())).deep.equal([
      BigNumber.from(1)
    ]);
    expect(await contract.walletOfOwner(await whitelistedUser.getAddress())).deep.equal([
      BigNumber.from(2),
      BigNumber.from(3),
      BigNumber.from(6)
    ]);
    expect(await contract.walletOfOwner(await holder.getAddress())).deep.equal([
      BigNumber.from(4),
      BigNumber.from(5)
    ]);
    expect(await contract.walletOfOwner(await externalUser.getAddress())).deep.equal([]);
  });

  it("Supply checks (long)", async function() {
    if (process.env.EXTENDED_TESTS === undefined) {
      this.skip();
    }

    const alreadyMinted = 6;
    const maxMintAmountPerTx = 1000;
    const iterations = Math.floor((CollectionConfig.maxSupply - alreadyMinted) / maxMintAmountPerTx);
    const expectedTotalSupply = iterations * maxMintAmountPerTx + alreadyMinted;
    const lastMintAmount = CollectionConfig.maxSupply - expectedTotalSupply;
    expect(await contract.totalSupply()).to.equal(alreadyMinted);

    await contract.setPaused(false);
    await contract.setMaxMintAmountPerTx(maxMintAmountPerTx);

    await Promise.all([...Array(iterations).keys()].map(async () => await contract.connect(whitelistedUser).mint(maxMintAmountPerTx, { value: getPrice(SaleType.PUBLIC_SALE, maxMintAmountPerTx) })));

    // Try to mint over max supply (before sold-out)
    await expect(contract.connect(holder).mint(lastMintAmount + 1, { value: getPrice(SaleType.PUBLIC_SALE, lastMintAmount + 1) })).to.be.revertedWith("Max supply exceeded!");
    await expect(contract.connect(holder).mint(lastMintAmount + 2, { value: getPrice(SaleType.PUBLIC_SALE, lastMintAmount + 2) })).to.be.revertedWith("Max supply exceeded!");

    expect(await contract.totalSupply()).to.equal(expectedTotalSupply);

    // Mint last tokens with owner address and test walletOfOwner(...)
    await contract.connect(owner).mint(lastMintAmount, { value: getPrice(SaleType.PUBLIC_SALE, lastMintAmount) });
    const expectedWalletOfOwner = [
      BigNumber.from(1)
    ];
    for (const i of [...Array(lastMintAmount).keys()].reverse()) {
      expectedWalletOfOwner.push(BigNumber.from(CollectionConfig.maxSupply - i));
    }
    expect(await contract.walletOfOwner(
      await owner.getAddress(),
      {
        // Set gas limit to the maximum value since this function should be used off-chain only and it would fail otherwise...
        gasLimit: BigNumber.from("0xffffffffffffffff")
      }
    )).deep.equal(expectedWalletOfOwner);

    // Try to mint over max supply (after sold-out)
    await expect(contract.connect(whitelistedUser).mint(1, { value: getPrice(SaleType.PUBLIC_SALE, 1) })).to.be.revertedWith("Max supply exceeded!");

    expect(await contract.totalSupply()).to.equal(CollectionConfig.maxSupply);
  });

  it("Token URI generation", async function() {
    const uriPrefix = "ipfs://__COLLECTION_CID__/";
    const uriSuffix = ".json";
    const totalSupply = await contract.totalSupply();

    expect(await contract.tokenURI(1)).to.equal(CollectionConfig.hiddenMetadataUri);

    // Reveal collection
    await contract.setUriPrefix(uriPrefix);
    await contract.setRevealed(true);

    // ERC721A uses token IDs starting from 0 internally...
    await expect(contract.tokenURI(0)).to.be.revertedWith("ERC721Metadata: URI query for nonexistent token");

    // Testing first and last minted tokens
    expect(await contract.tokenURI(1)).to.equal(`${uriPrefix}1${uriSuffix}`);
    expect(await contract.tokenURI(totalSupply)).to.equal(`${uriPrefix}${totalSupply}${uriSuffix}`);
  });
});
*/
