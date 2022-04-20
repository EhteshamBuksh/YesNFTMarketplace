import React from "react";
import styles from "../../containers/Home/Home.module.css";
import data from '../../data'
import heart from '../../images/red_heart.png'
// import Web3 from "web3";

const NFTs = () => {
  return (
    <>
      <div className={styles.nft_grids}>
      {
    data.map(((user, index) =>(
      <div key={index} className={styles.nft_auction}>
        <div className={styles.nft_img}></div>
        <button>{user.art}</button>
        <div className={styles.nft_users}>
          <div className={styles.nft_user}>
            <div className={styles.nft_user_img}></div>
            <h2>{user.artist}</h2>
          </div>

          <div className={styles.nft_time}>
            <p>
              <span>{user.time}</span> left
            </p>
          </div>
        </div>
        <h2>{user.name}</h2>
        <p>{user.bid}</p>
        <div className={styles.nft_prices_likes}>
          <div className={styles.nft_prices}>
            <h3>{user.price}</h3>
          </div>
          <div className={styles.nft_likes}>
            <img src={heart} alt ="heart_image" /> <span>40</span>
          </div>
        </div>
      </div>
    )))
}
</div>

    </>
  );
};

export default NFTs;
