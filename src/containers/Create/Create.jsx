import React, { useState } from "react";
import cr from "./Create.module.css";
import { useDropzone } from "react-dropzone";
import matic from "../../images/matic.png";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useStateValue } from '../../store/StateProvider';
import pinataSDK from '@pinata/sdk';
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();





const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')


const Create = () => {
  const Demo = [{ "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "uint256", "name": "_fees", "type": "uint256" }, { "internalType": "address[]", "name": "_whiteList", "type": "address[]" }, { "internalType": "address", "name": "_ProfileContractAddress", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "string", "name": "feesName", "type": "string" }, { "indexed": true, "internalType": "address", "name": "OwnerFeeAddress", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "fee", "type": "uint256" }], "name": "Fee", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_NFTowner", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "NFTiD", "type": "uint256" }, { "indexed": true, "internalType": "string", "name": "category", "type": "string" }], "name": "NFTcreation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_NFTowner", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "NFTiD", "type": "uint256" }], "name": "NFTdestruction", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "MintingFeesPerKB", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ProfileContractAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_whiteList", "type": "address[]" }], "name": "RemoveWhiteListingAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "TokenroyaltyOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "sizeOfFile", "type": "uint256" }], "name": "calculateFees", "outputs": [{ "internalType": "uint256", "name": "FeeAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "category", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint96", "name": "royaltyPercentage", "type": "uint96" }], "name": "changeRoyaltyPercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint96", "name": "royaltyPercentage", "type": "uint96" }, { "internalType": "uint256", "name": "sizeOfFile", "type": "uint256" }, { "internalType": "string", "name": "uri", "type": "string" }, { "internalType": "string", "name": "_category", "type": "string" }], "name": "createNFT", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "destroyNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "_salePrice", "type": "uint256" }], "name": "royaltyInfo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_fees", "type": "uint256" }], "name": "setMintingFeesPerKB", "outputs": [{ "internalType": "uint256", "name": "NewFee", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_ProfileContractAddress", "type": "address" }], "name": "setProfileAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_whiteList", "type": "address[]" }], "name": "setWhiteListingAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whiteListing", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }];
  // const navigate = useNavigate();

  // const goToSellPage = () => {
  //   navigate('/sell');
  // }

  const options = [
    {
      label: "Brand",
      value: "brand",
    },
    {
      label: "Artist",
      value: "artist",
    },
  ];
  const [{ wallet },] = useStateValue();
  const [files, setFiles] = useState([]);
  const [d, setF] = useState("");
  const [name, setName] = useState("");
  const [elink, setElink] = useState("");
  const [desc, setDesc] = useState("");
  const [signer, setSigner] = useState("");
  const [RP, setRp] = useState(0);
  const [Address, setAdd] = useState("");
  const [, dispatch] = useStateValue();

  async function SetFile(e) {
    const file = e[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setF(url);
      await createToken(url);
      console.log(url);
    } catch (error) {
      console.log('Error uploading file:', error);
    }
  }


  const t = () => {
    const s = wallet.id.getSigner();
    setSigner(s);
    console.log(wallet);
  
  }

// console.log(wallet.icons)
  const sendTx = (tx) => {
    dispatch({
      type: "CREATE_NFT",
      item: {
        id: signer,
        txt: tx,
      },
    });
  };



  async function createToken(url) {
    const pinata = pinataSDK('a9cc71b78a79ee46300e', '41ba2ae0e440bf1667fb11556dad7455f9f3c50c176379f46b3f445ddcf5d75e');
    console.log(pinata);
    const options = {
      pinataMetadata: {
        name: name,
        keyvalues: {
          customKey: "nfts",

        }
      },
      pinataOptions: {
        cidVersion: 0
      }
    };
    //console.log(createReadStream)

    // const data = JSON.stringify({img: `${d}`});
    // console.log(data,d)

    console.log(d);
    const body = {
      Name: name,
      ELink: elink,
      Desc: desc,
      Img: url
    };



    // 1024 Kb size of file
    // cost 1 ether

    pinata.pinJSONToIPFS(body, options).then(async (result) => {
      //handle results here                   
      console.log(result);
      console.log(signer);
      let dem = new ethers.Contract("0x11b7156Ba4B3a377438147f3e72Bf34e311b7d45", Demo, signer);
      console.log(dem);
      const rp = RP * 100;
      const rs = parseFloat(files[0].size / 1024).toFixed(2)
      console.log(rs);
      let tx = await dem.createNFT(Address, rp, rs, result.IpfsHash, "BaleBazi", {
        value: 1000000000000000 * rs
      });
      await tx.wait();
      sendTx(tx);


      console.log(tx);
    }).catch((err) => {
      //handle error here                                  
      console.log(err);
    });
  }



  // let checkAddress = wallet ? wallet.address : 'create';
  // console.log(checkAddress)



  // const checkWallet = () =>{
  //   if (checkAddress == "create") {
  //     toast("Connect your Wallet to upload a NFT", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     }

  // }





  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*, video/*",
    onDrop: (acceptedFiles) => {
      // uploadImage();
      t();
      // storeImage(uploadedImage);
  


      setFiles(
        acceptedFiles.map((file) =>

          Object.assign(file, {
            preview: URL.createObjectURL(file),

          })

        )

      );
    },
  });


  let imageSize = 0;
  let uploadedImage = "";
  const images = files.map((file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
       uploadedImage = event.target.result;
       console.log(uploadedImage);
       storeImage(uploadedImage);
   
    };
     reader.readAsDataURL(file);


    imageSize = imageSize + file.size
    console.log(imageSize);

    return (
      <div key={file.name} >
        <div>
          <img
            src={file.preview}
            style={{ width: "100%", height: "400px" }}
            alt={file.size}
          />
        </div>
        {/* <div className={cr.size}>
        </div> */}

      </div>

    )
  }


  );

  const storeImage = (uploadedImage) => {
    dispatch({
      type: "CREATE_NFT",
      item: {
        image: uploadedImage,
      },
    });
  };

  //  onDropHandler(files) {      
  //   var file = files[0]
  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     console.log(event.target.result);
  //   };
  //   reader.readAsDataURL(file);
  // }

  return (
    <>
      <div className={cr.heading}>
        <h1>Create new Item</h1>
        <p>
          Image, Video, Audio, or 3D Model. File types supported: JPG, PNG, GIF,
          SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
        </p>
      </div>

      <div className={cr.img_div}>
        <div className={cr.first_img}>
          <p>Upload File</p>
          <div {...getRootProps()} className={cr.profile_img}>
            <input {...getInputProps()} onChange={(e) => {
              setF(e.target.files[0])
              console.log(e.target.files[0])
              const t = new File(e.target.files[0], "d")
              setF(t);
            }} />
            {/* <p>Drop your Image here</p> */}
            <div>{images}</div>
          </div>
          <h3>Name</h3>
          <input type="text" placeholder="Item Name" onChange={(e) => {
            setName(e.target.value);
          }} />
          <h3>External Link</h3>
          <input
            onChange={(e) => { setElink(e.target.value) }}
            type="text"
            placeholder="https://www.youtube.com/watch?v=Oz9zw7-_vhM"
          />
          <h3>Description</h3>
          <input
            className={cr.detailed}
            type="text"
            placeholder="Provide a detailed description of your item."
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <h3>Blockchain</h3>
          <div className={cr.blockchain}>
            <img src={matic} alt="matic_image"></img>
            <span>Matic</span>
          </div>
          <h3>Select Brand/Artist</h3>

          <select>
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <h3>Create a new Brand/ Artist</h3>
          <div className={cr.new_brand}>
            <input type="text" name="text" placeholder="Create New Brand" />
            <select>
              {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <h3>Royalty Price</h3>
          <input type="text" name="text" placeholder="Enter Royalty Price" onChange={(e) => {
            setRp(e.target.value);
          }} />

          <h3>Wallet Address</h3>
          <input type="text" name="text" placeholder="Enter NFT Owner" onChange={(e) => {
            setAdd(e.target.value);
          }} />
          <Link to="/sell">
          <button onClick={async () => {
            console.log(name, elink, desc, files);

            await SetFile(files);
          }}>Create</button>
          </Link>
          <Link to="/sell">
          <button>Go to Sell Page</button>
          </Link>

        </div>
        <div className={cr.sec_img}>
          <p>Preview</p>
          <div {...getRootProps()} className={cr.preview_img}>
            <input {...getInputProps()} />
            <div className={cr.pr_img}>{images}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
