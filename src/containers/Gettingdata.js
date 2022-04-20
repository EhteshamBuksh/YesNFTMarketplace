// import React, {useState} from 'react'
// import { useStateValue } from '../store/StateProvider';


// const Gettingdata = () => {

//   const [{ wallet },] = useStateValue();

//Todo: Need to get the address of current wallet after integration

// const [address, setAddress] = useState("Create");
// const currentWallet = wallet ? wallet[0] : null;
// let walletAddress = currentWallet? currentWallet.address: '';
// console.log(walletAddress);

// const walletConnection = () =>{
//   if(walletAddress.length > 5){
//     setAddress(walletAddress)
//   }else{
//     setAddress(address)
//   }

// }
// setInterval(walletConnection, 1000)
//   return (
//     <div>Gettingdata
// <h3>{address}</h3>

//     </div>
//   )
// }
// }

// export default Gettingdata;