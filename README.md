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
