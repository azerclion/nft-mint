import React, { useEffect, useState } from "react";
import Web3 from "web3";
import styled from "styled-components";

import nftContract from "../ABI/nft";

function Home() {
  const [web3, setWeb3] = useState();
  const [userAccount, setUserAccount] = useState();
  const [myNft, setMyNft] = useState();

  async function walletHandler() {
    try {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        getUserAccountInfo();
        makeContractApi();
      } else {
        console.log("Please install MetaMask");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  async function makeContractApi() {
    const nft = await nftContract(web3);
    setMyNft(nft);
    console.log(nft);
  }
  async function getUserAccountInfo() {
    const accounts = await web3.eth.getAccounts();
    setUserAccount(accounts[0]);
  }

  useEffect(() => {
    try {
      if (typeof window.ethereum !== "undefined") {
        setWeb3(new Web3(window.ethereum));
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <HomeContainer>
      <div>Home</div>
      <WalletButton onClick={walletHandler}>CONNECT WALLET</WalletButton>
      <div>{userAccount}</div>
      <WalletButton>mint Button</WalletButton>
      {myNft && <div>{myNft._address}</div>}
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const WalletButton = styled.button`
  width: 150px;
  height: 25px;
  padding: 4px;
  border: 2px solid;
  border-radius: 20px;
  color: #baad98;
  background-color: #48617c;
  cursor: pointer;
`;

export default Home;
