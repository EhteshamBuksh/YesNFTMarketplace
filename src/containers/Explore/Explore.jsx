import React, { useState } from 'react';
// import Select from 'react-select';
import exp from "./Explore.module.css";
import NFTs from "../../components/NFTs/NFTs";
import styles from "../../containers/Home/Home.module.css";
// import grid from '../../images/grid.png';
// import grids from '../../images/gridsss.png'
import { useStateValue } from '../../store/StateProvider';
import Filters from "../../components/Filters/Filters";
import { ethers } from 'ethers'
import Web3Modal from "web3modal";

const Explore = () => {

  // const options = [
  //   { value: 'artist', label: 'Artist' },
  //   { value: 'brand', label: 'Brand' }
  // ]

  const [{wallet},] = useStateValue();
  const [signer,setSigner] = useState("");

  const t = async () =>{
    const s = wallet.id.getSigner();
    // console.log(s);
          setSigner(s);
        console.log(wallet);
  
  }
   
  const tAdd = "0x11b7156Ba4B3a377438147f3e72Bf34e311b7d45";
  const tAbi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_fees","type":"uint256"},{"internalType":"address[]","name":"_whiteList","type":"address[]"},{"internalType":"address","name":"_ProfileContractAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"feesName","type":"string"},{"indexed":true,"internalType":"address","name":"OwnerFeeAddress","type":"address"},{"indexed":true,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"Fee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_NFTowner","type":"address"},{"indexed":true,"internalType":"uint256","name":"NFTiD","type":"uint256"},{"indexed":true,"internalType":"string","name":"category","type":"string"}],"name":"NFTcreation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_NFTowner","type":"address"},{"indexed":true,"internalType":"uint256","name":"NFTiD","type":"uint256"}],"name":"NFTdestruction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MintingFeesPerKB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ProfileContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_whiteList","type":"address[]"}],"name":"RemoveWhiteListingAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"TokenroyaltyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"sizeOfFile","type":"uint256"}],"name":"calculateFees","outputs":[{"internalType":"uint256","name":"FeeAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"category","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint96","name":"royaltyPercentage","type":"uint96"}],"name":"changeRoyaltyPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint96","name":"royaltyPercentage","type":"uint96"},{"internalType":"uint256","name":"sizeOfFile","type":"uint256"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"string","name":"_category","type":"string"}],"name":"createNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"destroyNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fees","type":"uint256"}],"name":"setMintingFeesPerKB","outputs":[{"internalType":"uint256","name":"NewFee","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ProfileContractAddress","type":"address"}],"name":"setProfileAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_whiteList","type":"address[]"}],"name":"setWhiteListingAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteListing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];

  const MAdd = "0xf62C7D6D1D8D5CE03D1EF443cb64fbF384322043";
  const MAbi = [{"inputs":[{"internalType":"uint256","name":"_platformfees","type":"uint256"},{"internalType":"uint256","name":"_GSTcharge","type":"uint256"},{"internalType":"address","name":"_ProfileContractAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"NFTcontract","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"sellDetails","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"AuctionSell","outputs":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"startingPrice","type":"uint256"},{"internalType":"uint256","name":"endingPrice","type":"uint256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"AuctionSellIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContract","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"CancelAuctionPriceNFTtSell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContract","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"CancelFixPriceNFTtSell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"GSTcharge","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"NFTcreates","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PlatformFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ProfileContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContract","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_Price","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"}],"name":"RegisterAuctionPriceNFTsell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContract","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_Price","type":"uint256"}],"name":"RegisterFixPriceNFtSell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_GSTcharge","type":"uint256"}],"name":"SetGSTchargePercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_feesPercentage","type":"uint256"}],"name":"SetMarketPlaceFeesPercentage","outputs":[{"internalType":"uint256","name":"NewFee","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContract","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"auctionEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContract","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"buyAtAuctionPrice","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContract","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"buyAtFixedPrice","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContract","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"currentHighestPrice","outputs":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fixSell","outputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"Price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"fixSellIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pendingReturns","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"NFTcreate","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"priceOfNft","outputs":[{"internalType":"uint256","name":"priceTobePaid","type":"uint256"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"},{"internalType":"uint256","name":"platformCharge","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"NftcreateAddress","type":"address"}],"name":"setNftCreationContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ProfileContractAddress","type":"address"}],"name":"setProfileAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

  const getNfts = async () => {
    console.log(ethers.utils.hexValue(97));
    console.log(signer)
    const chain = await signer.getChainId()
    if(chain != 97 ){
      alert("Wrong network")
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          // change the chain Id once you want to have Polygon Mainnet and change all the config also over here!!
          params: [{ chainId: ethers.utils.hexValue(97) }],
        });

        let web3Modal = new Web3Modal();
        let connection = await web3Modal.connect();
        let provider = new ethers.providers.Web3Provider(connection);
        setSigner(provider.getSigner());
      } catch (e) {
        if (e.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: ethers.utils.hexValue(97),
                  chainName: 'Bianace Testnet',
                  nativeCurrency: {
                    name: 'BNB',
                    symbol: 'BNB', // 2-6 characters long
                    decimals: 18
                  },
                
                  rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                },
              ],
            });
            let web3Modal = new Web3Modal();
            let connection = await web3Modal.connect();
            let provider = new ethers.providers.Web3Provider(connection);
            setSigner(provider.getSigner());
          }
          catch(e){
            console.log(e);
          }
        }
        }
      
      }

    else{
      const tokenContract = new ethers.Contract(tAdd, tAbi, signer)
    //const marketContract = new ethers.Contract(MAdd, MAbi, signer)
    console.log(tokenContract)
    const ts = await tokenContract.totalSupply();
    for(let i=0;i<ts;i++){
      const data = await tokenContract.tokenURI(i);
      console.log(`https://gateway.pinata.cloud/ipfs/${data}`,ts.toString());
    }
    
    }
    }

  return (
    <>
      <div className={exp.main_section}>
        <Filters />
        <div className={styles.explore}>
          {/* <h1>Explore</h1> */}
          
          {/* <div className={exp.explore_menu}>
            <div>
              <p>22,133,154 results</p>
            </div>
            <div className={exp.selector}>
              <Select options={options} placeholder="Sort By" />
              <img src={grid} alt="grid" />
              <img src={grids} alt="grids" />
            </div>
          </div> */}
          <NFTs />

          <div className={styles.nft_button}>
            <button onClick={async ()=>{
           
             
             await getNfts();
            }}>View More</button>
            
          </div>
          <div className={styles.nft_button}>
            <button onClick={async ()=>{
             await t();
             

            }}>connect</button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;