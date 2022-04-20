import React from "react";
import styles from "./Home.module.css";
import nft_image_1 from "../../images/nft_front.png";
import setup_img from "../../images/setup_icon_001.png";
import setup_img1 from "../../images/Icon_002.png";
import setup_img2 from "../../images/Icon_003.png";
import setup_img3 from "../../images/Icon_004.png";
import less from '../../images/less_than.png';
import greater from '../../images/greater_than.png';
import down_arrow from '../../images/down_arrow.png';
import profile_image from '../../images/Profile_image.png';
import inverted_comma from '../../images/open_inverted_comma.png';
import stars from "../../images/stars.png"
import NFTs from "../../components/NFTs/NFTs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.cont}>
          <div className={styles.cont_1}>
            <div className={styles.cont_01}>
              <h2>Explore, Collect and Sell NFTs</h2>
              <p>On the Worlds best and Biggest Marketplace</p>
              <div className={styles.cont_1_btn}>
                <Link to="/explore"><button className={styles.explore_btn}>Explore</button></Link>
                <Link to="/create"><button className={styles.create_btn}>Create</button></Link>
              </div>
            </div>
          </div>

          <div className={styles.cont_2}>
            <img src={nft_image_1} alt="NFT"></img>
          </div>
        </div>
      </div>

      {/* Explore the NFTs */}
      <div className={styles.auctions}>
        <div className={styles.auction_head}>
          <h2>Live Auctions</h2>
          <div className={styles.auction_sign}>
            {/* <div>&#60;</div> */}
            <img src={less} className={styles.less_than} alt="Less than icon" />
            {/* <div className={styles.auction_less}>&#62;</div> */}
            <img src={greater} className={styles.greater_than} alt="Greater than icon" />
          </div>
        </div>
        <NFTs />
      </div>

      {/* Top Collection */}

      <div className={styles.collections}>
        <div className={styles.collection_head}>
          <h2>Brands</h2>
          <div className={styles.collection_dates}>
            <span><h2>Last 24 Hrs</h2></span> <span><img src={down_arrow} alt="Down arrow" /></span>
          </div>
        </div>

        <div className={styles.collection}>
          <div className={styles.coll}>
            <div className={styles.coll_no}>01</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>02</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>03</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>04</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>05</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>06</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>07</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>08</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>09</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>10</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>11</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>12</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>13</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>14</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>15</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>

          <div className={styles.coll}>
            <div className={styles.coll_no}>16</div>
            <div className={styles.coll_img}></div>
            <div className={styles.coll_profile}>
              <div className={styles.coll_name}>
                <h4>John Doe</h4>
              </div>
              <div className={styles.coll_price}>
                <p>$219.78</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NFT Business */}

      <div className={styles.business}>
        <div className={styles.business_head}>
          <h1>NFT Business Process</h1>
        </div>

        <div className={styles.bus_grids}>
          <div className={styles.bus_grid}>
            <img src={setup_img} alt="setup"></img>
            <h3>Set Up your Wallet</h3>
            <p>
              Once you’ve set up your wallet of choice, connect it to MNFT by
              clicking the wallet icon in the top right corner.
            </p>
          </div>

          <div className={styles.bus_grid}>
            <img src={setup_img1} alt="Setup"></img>
            <h3>Create Collection</h3>
            <p>
              Click My Collections and set up your collection. Add social links, a description, profile & banner images, & set secondary sales fee.            </p>
          </div>

          <div className={styles.bus_grid}>
            <img src={setup_img2} alt="setup"></img>
            <h3>Add Your NFTs</h3>
            <p>
              Upload your work (image, video, audio, 3D art), add title description, & customize your NFTs with properties, stats, & unlockable content.            </p>
          </div>

          <div className={styles.bus_grid}>
            <img src={setup_img3} alt="setup"></img>
            <h3>List them for sale</h3>
            <p>
              Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!            </p>
          </div>
        </div>
      </div>

      {/* Explore */}

      <div className={styles.explore}>
        <h1>Explore</h1>

        <NFTs />
        <NFTs />

        <div className={styles.nft_button}>
          <button>View More</button>
        </div>
      </div>


      {/* NFT Trust and Safety */}

      <div className={styles.trust}>
        <h1>NFT Trust and Safety</h1>
        <div className={styles.trust_grids}>
          <div className={styles.grid_1}>
            <div className={styles.grid_1_top}>
              <img src={inverted_comma} alt="Open inverted Comma" />
              <img src={stars} alt="Stars" />
            </div>
            <h4>Et scaevola delicata vix, mea invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voltaria ex mel. Eos malis Et scaevola delicata vix, mea ei invidunt indoctum. </h4>
            <div className={styles.grid_1_bottom}>
              <img src={profile_image} alt="profile_image" />
              <div className={styles.grid_bottom_container}>
                <h3>Darlene Robertson</h3>
                <p>Product designer</p>
              </div>
            </div>
          </div>
          <div className={styles.grid_1}>
            <div className={styles.grid_1_top}>
              <img src={inverted_comma} alt="Open inverted Comma" />
              <img src={stars} alt="Stars" />
            </div>
            <h4>Et scaevola delicata vix, mea invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voltaria ex mel. Eos malis Et scaevola delicata vix, mea ei invidunt indoctum. </h4>
            <div className={styles.grid_1_bottom}>
              <img src={profile_image} alt="profile_image" />
              <div className={styles.grid_bottom_container}>
                <h3>Darlene Robertson</h3>
                <p>Product designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn and Earn  */}

      <div className={styles.learn_grid}>
        <div className={styles.learn_earn}>
          <h1>Learn and Earn Free ETH with NFT</h1>
          <p>A creative nft business agency that lead & inspire</p>
          <button>Explore More</button>
        </div>
        <div className={styles.learn_video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eQ_VkewyxYk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
