import React, { useState } from "react";
import price from "./Price.module.css";
import matic from "../../images/matic.png";
import dollar from "../../images/dollar_sign.png";
import { useStateValue } from '../../store/StateProvider';
import { ethers } from 'ethers'
import list from "../../images/list.png";
import nft from "../../images/nft.png";
import { Link } from "react-router-dom";
const Price = () => {
  const add = "0x11b7156Ba4B3a377438147f3e72Bf34e311b7d45";
  const abi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_fees","type":"uint256"},{"internalType":"address[]","name":"_whiteList","type":"address[]"},{"internalType":"address","name":"_ProfileContractAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"feesName","type":"string"},{"indexed":true,"internalType":"address","name":"OwnerFeeAddress","type":"address"},{"indexed":true,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"Fee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_NFTowner","type":"address"},{"indexed":true,"internalType":"uint256","name":"NFTiD","type":"uint256"},{"indexed":true,"internalType":"string","name":"category","type":"string"}],"name":"NFTcreation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_NFTowner","type":"address"},{"indexed":true,"internalType":"uint256","name":"NFTiD","type":"uint256"}],"name":"NFTdestruction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MintingFeesPerKB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ProfileContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_whiteList","type":"address[]"}],"name":"RemoveWhiteListingAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"TokenroyaltyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"sizeOfFile","type":"uint256"}],"name":"calculateFees","outputs":[{"internalType":"uint256","name":"FeeAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"category","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint96","name":"royaltyPercentage","type":"uint96"}],"name":"changeRoyaltyPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint96","name":"royaltyPercentage","type":"uint96"},{"internalType":"uint256","name":"sizeOfFile","type":"uint256"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"string","name":"_category","type":"string"}],"name":"createNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"destroyNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fees","type":"uint256"}],"name":"setMintingFeesPerKB","outputs":[{"internalType":"uint256","name":"NewFee","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ProfileContractAddress","type":"address"}],"name":"setProfileAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_whiteList","type":"address[]"}],"name":"setWhiteListingAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteListing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]

  const [p,setPrice] = useState("");
  const [{ wallet },] = useStateValue();
  const [signer, setSigner] = useState("");


  const t = () =>{
    const s = wallet.id.getSigner();
    // console.log(s);
          setSigner(s);
        console.log(s);
  
  }

  return (
    <>
      <div className={price.container}>
        <h1>The Art</h1>
        <p>Owned by You</p>
        <div className={price.main}>
          <div className={price.grid_1}>
            <h3>Blockchain</h3>
            <div className={price.matic}>
              <img src={matic} alt="matic_image"></img>
              <p>Matic</p>
            </div>


            <div className={price.fix}>
              <div className={price.fixed}>
                <div className={price.fixed_btn}>
                  <div className={price.fixed_btn_1}>
                    <img src={dollar} alt="dollar_image"></img>
                    <p>Fixed Price</p>
                  </div>
                  <Link to="/auction">
                    <div className={price.fixed_btn_2}>
                      <img src={list} alt="list_image"></img>
                      <p>Timed Auction</p>
                    </div></Link>
                </div>
              </div>

              <div className={price.rate}>
                <h3>Price</h3>
                <div className={price.rate_input}>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter the Amount"
                    onChange={(e)=>{
                      setPrice(e.target.value);
                      t();
                    }}
                  />
                  <span>
                    <h3>ETH</h3>
                  </span>
                </div>
              </div>
            </div>

            <button className={price.sell_btn} onClick={async ()=>{
                  let dem = new ethers.Contract("0x11b7156Ba4B3a377438147f3e72Bf34e311b7d45", abi, signer); 

                  const tx = await dem.approve("0xf62C7D6D1D8D5CE03D1EF443cb64fbF384322043",3); 
                  await tx.wait();
                  console.log(dem,signer,tx);                   
              
            }}>Sell</button>
          </div>
          <div className={price.grid_2}>
            <p>Preview</p>
            <div className={price.grid_2_img}>
            <img src={nft} alt="nft_image"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
