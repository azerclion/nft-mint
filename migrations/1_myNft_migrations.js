const myNft = artifacts.require("myNFT");

module.exports = async function(deployer) {
  await deployer.deploy(
    myNft,
    "mynft",
    "symbol",
    10,
    /* global BigInt */
    1000_000_000_000_000_000n,
    15,
    15,
    "ipfs://QmTzHTBRmt84u81GDZbvRwArcxWVv9awBH9C7AMiZiWNWp"
  );
};
