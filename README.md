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
    // _revelingBlock : 언제 NFT가 공개되는지 15,
    // ***** 공개된 그림을 확인할려면 opensea에서 refresh metadata를 눌러야 합니다. ****
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
❯ ganache-cli
❯ truffle test
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


  Contract: myNft
    myNFT deployment
      ✔ myNFT has a name
      ✔ myNFT has a symbol
      ✔ myNFT has a limit
      ✔ myNFT has a price
      ✔ myNFT has a interval (40ms)
      ✔ myNFT has a lastId
      ✔ myNFT has a notReveledNFTURI
    myNFT functest
      ✔ myNFT has a u_setPrice (146ms)
      ✔ myNFT has a u_setPrice (329ms)
      ✔ myNFT has a mint (204ms)
      ✔ myNFT has a lastId
      ✔ myNFT has a mint (189ms)
      ✔ myNFT has a lastId
      ✔ myNFT has a u_currentBalance
      ✔ myNFT has a u_withdraw (87ms)
      ✔ myNFT has a u_currentBalance


  16 passing (2s)
```

```
❯ truffle migrate --network goerli --reset
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

   Replacing 'myNFT'
   -----------------
   > transaction hash:    0x1ab6986dab2f23ab2b550a3c872015026595594545a722c4123122991263088b
   > Blocks: 2            Seconds: 17
   > contract address:    0xC64F09eaa254796C842e9B0EE1FB9B2AC02F4a7E
   > block number:        8196180
   > block timestamp:     1671944316
   > account:             0x56C53049a267d05578163706C3589D44061AD9A6
   > balance:             32.549931495114551026
   > gas used:            3634986 (0x37772a)
   > gas price:           2.500000011 gwei
   > value sent:          0 ETH
   > total cost:          0.009087465039984846 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 8196181)
   > confirmation number: 2 (block: 8196182)
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.009087465039984846 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.009087465039984846 ETH
```
