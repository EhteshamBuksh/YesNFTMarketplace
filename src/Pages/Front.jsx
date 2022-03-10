import React from 'react';
import styles from '../Styles/Front.module.css';
import nft_image_1 from '../Images/nft_front.png';
import setup_img from '../Images/setup_icon_001.png';
import NFTs from '../Components/NFTs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
const Front = () => {
  return (<>
<Navbar/>
    <div className={styles.main_container}>
    {/* <div className={styles.text_img}>
    <img src={nft_text}></img>    
    </div> */}
    <div className={styles.cont}>
        <div className={styles.cont_1}>
        <div className={styles.cont_01}>
            <h2>Explore, Collect and Sell NFTs</h2>
            <p>On the Worlds best and Biggest Marketplace</p>
            <div className={styles.cont_1_btn}>
                <button className={styles.explore_btn}>Explore</button>
                <button className={styles.create_btn}>Create</button>
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
       <div>&#60;</div>
       <div className={styles.auction_less}>&#62;</div>
    </div>
    </div>
<NFTs/>
</div>



    {/* Top Collection */}

<div className={styles.collections}>

<div className={styles.collection_head}>
    <h2>Brands</h2>
    <div className={styles.collection_dates}>
    <h2>
    <span>Last 24 Hrs</span>  &#8964;
    </h2>
    </div>
    </div>


<div className={styles.collection}>

<div className={styles.coll}>
<div className={styles.coll_no}>01</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>


<div className={styles.coll}>
<div className={styles.coll_no}>02</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>

<div className={styles.coll}>
<div className={styles.coll_no}>03</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>

<div className={styles.coll}>
<div className={styles.coll_no}>04</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>

<div className={styles.coll}>
<div className={styles.coll_no}>05</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>

<div className={styles.coll}>
<div className={styles.coll_no}>06</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>

<div className={styles.coll}>
<div className={styles.coll_no}>07</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>

<div className={styles.coll}>
<div className={styles.coll_no}>08</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>


<div className={styles.coll}>
<div className={styles.coll_no}>09</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>



<div className={styles.coll}>
<div className={styles.coll_no}>10</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>



<div className={styles.coll}>
<div className={styles.coll_no}>11</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>



<div className={styles.coll}>
<div className={styles.coll_no}>12</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>



<div className={styles.coll}>
<div className={styles.coll_no}>13</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>



<div className={styles.coll}>
<div className={styles.coll_no}>14</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>



<div className={styles.coll}>
<div className={styles.coll_no}>15</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
</div>

</div>



<div className={styles.coll}>
<div className={styles.coll_no}>16</div>
<div className={styles.coll_img}></div>
<div className={styles.coll_profile}>
  <div className={styles.coll_name}><h4>Selmon Bhai</h4></div>
  <div className={styles.coll_price}><p>$219.78</p></div>
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
<p>Once you’ve set up your wallet of choice, connect it to MNFT  by clicking the wallet icon in the top right corner.</p>
</div>



<div className={styles.bus_grid}>
<img src={setup_img} alt="Setup"></img>
<h3>Set Up your Wallet</h3>
<p>Once you’ve set up your wallet of choice, connect it to MNFT  by clicking the wallet icon in the top right corner.</p>
</div>

<div className={styles.bus_grid}>
<img src={setup_img} alt="setup"></img>
<h3>Set Up your Wallet</h3>
<p>Once you’ve set up your wallet of choice, connect it to MNFT  by clicking the wallet icon in the top right corner.</p>
</div>

<div className={styles.bus_grid}>
<img src={setup_img} alt="setup"></img>
<h3>Set Up your Wallet</h3>
<p>Once you’ve set up your wallet of choice, connect it to MNFT  by clicking the wallet icon in the top right corner.</p>
</div>
</div>

</div>


{/* Explore */}

<div className={styles.explore}>
<h1>Explore</h1>

<NFTs/>
<NFTs/>

<div className={styles.nft_button}><button>View More</button></div>
</div>


{/* Learn and Earn  */}

<div className={styles.learn_grid}>
<div className={styles.learn_earn}>
  <h1>Learn and Earn Free ETH with NFT</h1>
  <p>A creative nft business agency that lead & inspire</p>
  <button>Explore Now</button>
</div>
<div className={styles.learn_video}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/eQ_VkewyxYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
  
</div>


<Footer/>

    </>

  )
}

export default Front