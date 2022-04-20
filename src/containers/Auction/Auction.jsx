import React from "react";
import price from "../Price/Price.module.css";
import matic from "../../images/matic.png";
import dollar from "../../images/dollar_sign.png";
import clock from "../../images/clock.png";
import nft from "../../images/nft.png";
import { Link } from "react-router-dom";

const Price = () => {
  
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
                  <Link to="/price">
                    <div className={price.fixed_btn_1}>
                      <img src={dollar} alt="dollar_image"></img>
                      <p>Fixed Price</p>
                    </div>
                  </Link>
                  <Link to="/auction">
                    <div className={price.fixed_btn_2}>
                      <img src={clock} alt="clock_image"></img>
                      <p>Timed Auction</p>
                    </div></Link>
                </div>
              </div>

              <div className={price.rate}>
                <h3>Minimum Bid</h3>
                <div className={price.rate_input}>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter the Amount"
                  />
                  <span>
                    <h3>ETH</h3>
                  </span>
                </div>

                <div className={price.dates}>
                  <div className={price.start_date}>
                    <h3>Starting Date</h3>
                    <div className={price.date_input}>
                      <input type='date' min={new Date().toISOString().split('T')[0]} />
                    </div>
                  </div>
                  <div className={price.exp_date}>
                    <h3>Expiration Date</h3>
                    <div className={price.date_input}>
                      {/* <input type="date" min={date}/> */}
                      <input type='date' min={new Date().toISOString().split('T')[0]} />
                    </div>
                  </div>
                </div>


              </div>
              </div>
              <button className={price.sell_btn}>Sell</button>
            </div>
            <div className={price.grid_2}>
              <p>Preview</p>
              <img src={nft} alt="nft_image"></img>
            </div>
          </div>
        </div>
      </>
      );
};

      export default Price;
