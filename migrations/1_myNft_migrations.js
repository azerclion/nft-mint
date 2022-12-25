const myNft = artifacts.require("myNFT");

module.exports = async function (deployer) {
  await deployer.deploy(
    myNft,
    "metaMusicAlbum",
    "MMA",
    20,
    /* global BigInt */
    10_000_000_000_000_000n,
    15,
    15,
    "ipfs://QmTzHTBRmt84u81GDZbvRwArcxWVv9awBH9C7AMiZiWNWp"
  );
};
