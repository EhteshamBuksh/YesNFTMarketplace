import React from "react";
import { Link } from "react-router-dom";
import sell from "./Sell.module.css";
import nft from "../../images/nft.png";
import { useStateValue } from '../../store/StateProvider';


const Sell = () => {
  const [{ create },] = useStateValue();
const uploadImage = create.image;
console.log(uploadImage);
  return (
    <>
      <div className={sell.container}>
        <h1>The Art</h1>
        <div className={sell.own}>
          <p>Owned By You</p>
          <div className={sell.own_btn}>
          <Link to ="/create">
            <button>Edit</button>
            </Link>
            <Link to ="/price">
            <button>Sell</button>
            </Link>
          </div>
        </div>

        <div className={sell.main}>
          <div className={sell.main_1}>
            <img src={uploadImage} alt="nft_image"></img>
          </div>

          <div className={sell.main_2}>
            <h3>Description</h3>
            <div className={sell.des_p}>
            <p>
              The Art is created in a 3d software. Its in PNG format with
              shadows. So, you can place it on any background.
            </p>
            <p>
              The Art is created in a 3d software. Its in PNG format with
              shadows. So, you can place it on any background.
            </p>
            </div>
            <h3>Details</h3>
            <div className={sell.details}>
              <div className={sell.det}>
                <p>Contact Address</p>
                <p>0x29536477h98i874963</p>
              </div>

              <div className={sell.det}>
                <p>Contact Address</p>
                <p>0x29536477h98i874963</p>
              </div>

              <div className={sell.det}>
                <p>Contact Address</p>
                <p>0x29536477h98i874963</p>
              </div>

              <div className={sell.det}>
                <p>Contact Address</p>
                <p>0x29536477h98i874963</p>
              </div>

              <div className={sell.det}>
                <p>Contact Address</p>
                <p>0x29536477h98i874963</p>
              </div>
            </div>
          </div>
        </div>

        <div className={sell.more}>
          <h3>More from this Collection</h3>
          <div className={sell.more_nft}>
            <div className={sell.more_nfts}>
              <img src={nft} alt="nft_image"></img>
              <div className={sell.more_nfts_div}>
                <p>Collection</p>
                <p>Price</p>
              </div>

              <div className={sell.more_nfts_div}>
                <p>NFT Name</p>
                <p>0.4 ETH</p>
              </div>
            </div>

            <div className={sell.more_nfts}>
              <img src={nft} alt="nft_image"></img>
              <div className={sell.more_nfts_div}>
                <p>Collection</p>
                <p>Price</p>
              </div>

              <div className={sell.more_nfts_div}>
                <p>NFT Name</p>
                <p>0.4 ETH</p>
              </div>
            </div>

            <div className={sell.more_nfts}>
              <img src={nft} alt="nft_image"></img>
              <div className={sell.more_nfts_div}>
                <p>Collection</p>
                <p>Price</p>
              </div>

              <div className={sell.more_nfts_div}>
                <p>NFT Name</p>
                <p>0.4 ETH</p>
              </div>
            </div>
          </div>
          <button>View Collection</button>
        </div>
      </div>
    </>
  );
};

export default Sell;
