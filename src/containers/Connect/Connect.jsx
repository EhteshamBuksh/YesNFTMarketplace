import React, { useState } from "react";
import styles from "./Connect.module.css";
import metamask from "../../images/metamask_996.png";
import walletConnect from "../../images/conn_wallet_558.png";
import trust_wallet from "../../images/trust_wallet_220.png";
import binance from "../../images/binance_888.png";
import coinbase from "../../images/coinbase_554.png";
import binance_icon from "../../images/binance_icon.png";
import metamask_icon from "../../images/metamaskIcon.png";
import walletConnect_icon from "../../images/walletConnectIcon.png";
import trustWallet_icon from "../../images/trustWalletIcon.png";
import coinbase_icon from "../../images/coinbase_icon.png";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";
import Fortmatic from "fortmatic";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useStateValue } from "../../store/StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast.configure();


const providerOptions = {
  binancechainwallet: {
    package: true,
  },
  walletlink: {
    package: WalletLink,
    options: {
      appName: "Web 3 Modal Demo",
      infuraId: "69ad1e81e7d64a258b80f29e627407c2",
    },
  },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: "69ad1e81e7d64a258b80f29e627407c2", // required
    },
  },

  fortmatic: {
    package: Fortmatic, // required
    options: {
      key: "pk_test_6F4AD8C73D7BA5C7", // required
    },
  },
};

const PROVIDERS_NAMES = {
  metamask: 'metamask',
  coinbase: 'walletlink',
  walletConnect: 'walletconnect',
  formatic: 'formatic',
  binance: 'binancechainwallet'
};


const Connect = () => {
  const [providersList,] = useState([
    {
      id: 'metamask',
      imgSrc: metamask,
      label: 'Metamask',
      icon: metamask_icon
    },
    {
      id: 'walletlink',
      imgSrc: coinbase,
      label: 'Coinbase',
      icon: coinbase_icon
    },
    {
      id: 'walletconnect',
      imgSrc: walletConnect,
      label: 'Wallet Connect',
      icon: walletConnect_icon
    },
    {
      id: 'formatic',
      imgSrc: trust_wallet,
      label: 'Formatic Wallet',
      icon: trustWallet_icon
    },
    {
      id: 'binancechainwallet',
      imgSrc: binance,
      label: 'Binance',
      icon: binance_icon
    }
  ]);

  const connectWallet = async (walletType) => {
    try {
      if (walletType === PROVIDERS_NAMES.metamask) {
        if (!window.ethereum) {
          toast.warning("Please Download Metamask to use!!");
          return;
        }
      }
      let connection;
      let web3Modal;
      if (walletType === PROVIDERS_NAMES.metamask) {
        web3Modal = new Web3Modal();
        connection = await web3Modal.connect();
      } else {
        web3Modal = new Web3Modal({
          cacheProvider: false, // optional
          providerOptions, // required
        });
        connection = await web3Modal.connectTo(walletType);
      }
      let provider = new ethers.providers.Web3Provider(connection);
      const address = await provider.getSigner().getAddress();
      const icons = providersList.find(provider => provider.id === walletType).icon;

      sendDetails(provider, address, icons);
      const providerName = providersList.find(provider => provider.id === walletType).label;
      toast.success(`${providerName} wallet is connected successfully.`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      toast.error(err.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  const [, dispatch] = useStateValue();

  const sendDetails = (provider, address, icons) => {
    dispatch({
      type: "ADD_WALLET",
      item: {
        id: provider,
        address: address,
        icons: icons,
      },
    });
  };

  const wallets = (
    <div className={styles.Wallets}>
      {providersList.map(provider => {
        return (
          <div className={styles.Wallet} key={provider.id} onClick={() => connectWallet(provider.id)}>
            <img className={styles.Img} src={provider.imgSrc} alt={provider.label}></img>
            <h3 className={styles.Text}>{provider.label}</h3>
          </div>
        );
      })}
    </div>
  )

  return (
    <>
      <div className={styles.Connect}>
        <ToastContainer />
        <div className={styles.ConnectHeading}>Connect to Wallet</div>
        {wallets}
      </div>
    </>
  );
};

export default Connect;
