import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import conn from '../Styles/Connect.module.css';
import metamask from '../Images/metamask_996.png'
import walletConnect from '../Images/conn_wallet_558.png'
import trust_wallet from '../Images/trust_wallet_220.png'
import binance from '../Images/binance_888.png'
import coinbase from '../Images/coinbase_554.png'

const Connect = () => {
  return (
<>
<Navbar/>

<div className={conn.container}>
<h1>Connect to Wallet</h1>
<div className={conn.wallets}>
<div className={conn.wallet}>
<img src={metamask}></img>
<h2>Metamask</h2>
</div>


<div className={conn.wallet}>
<img src={coinbase}></img>
<h2>Coinbase</h2>
</div>


<div className={conn.wallet}>
<img src={walletConnect}></img>
<h2>Wallet Connect</h2>
</div>


<div className={conn.wallet}>
<img src={trust_wallet}></img>
<h2>Trust Wallet</h2>
</div>


<div className={conn.wallet}>
<img src={binance}></img>
<h2>Binance</h2>
</div>
</div>

</div>


<Footer/>
</>
  )
}

export default Connect