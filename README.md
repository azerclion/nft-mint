# Getting Started with Create React App & truffle

nft minting page

```
yarn add @openzeppelin/contracts
```

```
    // _name : 토큰의 이름
    // _symbol : 토큰의 심볼
    // _limit : NFT 최대 발행 개수 10
    // _interval : NFT 민트 간격 (봇이 독점 방지) 15
    // _revelingBlock : 언제 NFT가 공개되는지 15
    // _notReveledNFTURI : 진짜 NFT를 공개 하기전의 그림의 메타데이터 즉 Cover.js URI
```

```
migrations.js

const myNft = artifacts.require("myNFT");

module.exports = function(deployer) {
  deployer.deploy(
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
```

```
test.js

    it("myNFT has a mint", async () => {
      await myNFT.mint({
        from: user,
        value: web3.utils.toWei("0.01", "ether"),
      });
    });

```

```
❯ truffle migrate --network goerli

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'goerli'
> Network id:      5
> Block gas limit: 30000000 (0x1c9c380)


1_myNft_migrations.js
=====================

   Deploying 'myNFT'
   -----------------
   > transaction hash:    0x60da7854795709d367f93c8cce0a0780f057fd26c10bf70c71e60e0c2d0a133f
   > Blocks: 1            Seconds: 21
   > contract address:    0x2e6A34Bd8eD77b165d998Df31Dd4Be8274dA3CC8
   > block number:        8192693
   > block timestamp:     1671892248
   > account:             0x56C53049a267d05578163706C3589D44061AD9A6
   > balance:             32.595368220296297986
   > gas used:            3634926 (0x3776ee)
   > gas price:           2.500000043 gwei
   > value sent:          0 ETH
   > total cost:          0.009087315156301818 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 8192694)
   > confirmation number: 2 (block: 8192695)
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.009087315156301818 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.009087315156301818 ETH
```
