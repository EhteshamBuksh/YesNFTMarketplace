import React from "react";
import pro from "./Profile.module.css";
import globe from "../../images/globe_887.png";
import profile_white from "../../images/profile_white.png";
import exporrt from "../../images/export_112.png";
import setting from "../../images/setting_888.png";
import copy_add from "../../images/copy_add.png";
// import search_icon from '../../images/search_icon.png'
// import grid from '../../images/grid.png';
// import grids from '../../images/gridsss.png'
import NFTs from "../../components/NFTs/NFTs";
// import Select from 'react-select';


const Profile = () => {
  // const options = [
  //   { value: 'high', label: 'High to Low' },
  //   { value: 'low', label: 'Low to High' }
  // ]
  // const options1 = [
  //   { value: 'high', label: 'Favourites' },
  //   { value: 'low', label: 'Newly Added' }
  // ]

  return (
    <>
      <div className={pro.banner_img}></div>

      <div className={pro.dp}>
        <div className={pro.dp_1}>
          <div className={pro.dp_1_img}>
            <img src={globe} alt="Globe_Image"></img>
          </div>
          <div className={pro.dp_1_weblink}>
            <p>www.jonathandoe.yesnft.com</p>
          </div>
        </div>

        <div className={pro.dp_2}>
          <div className={pro.dp_2_img}>
            <img src={profile_white} alt="Profile_Image"></img>
          </div>
        </div>

        <div className={pro.dp_3}>
          <div>
            <img src={exporrt} alt="Export"></img>
          </div>
          <div>
            <img src={setting} alt="Setting"></img>
          </div>
        </div>
      </div>

      <div className={pro.user_info}>
        <h2>Jonathan Doe</h2>
        <div className={pro.user_address}>
          <p>0xc4c16a125..b21a</p>
          <img src={copy_add} alt="Copy_Address_Icon"></img>
        </div>
      </div>

      <div className={pro.about}>
        <p>
          Pavel Sokov is a renowned portrait painter. When he was 24 years old,
          Sokov was approached by Time to paint the cover of the Time's....{" "}
          <span>Read More</span>
        </p>
      </div>

      <div className={pro.foll}>
        <div className={pro.followers}>
          <p>
            <span>513 </span>Followers
          </p>
        </div>
        <div className={pro.following}>
          <p>
            <span>213 </span>Following
          </p>
        </div>
      </div>


      <div className={pro.main_section}>

        <div className={pro.filter_searchbar}>
          <div className={pro.filter_nav}>
            <ul>
              <li>On Sale</li>
              <li>Collectibles</li>
              <li>Created</li>
              <li>Favourite</li>
              <li>Owned</li>
              <li>Activity</li>
              <li>Hidden</li>
              <li>Offers</li>
            </ul>
          </div>

          {/* <div className={pro.filter_search}>
            <div className={pro.search}>
              <img src={search_icon} alt="Search icon" />
              <input type="search" placeholder="Search" />
            </div>
            <div className={pro.search_options}>
              <Select options={options1} placeholder="Popularity" />
            </div>
            <div className={pro.search_options}>
              <Select options={options} placeholder="Sort By" />
            </div>
            <div className={pro.search_image}>
              <img src={grid} alt="grid icon" />
              <img src={grids} alt="gridss icon" />

            </div>
          </div> */}


        </div>

        <NFTs />
      </div>
      <div className={pro.nft_button}>
            <button>View More</button>
          </div>
    </>
  );
};

export default Profile;
