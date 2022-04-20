import React from "react";
import stat from "./Stats.module.css";
import profile_image from "../../images/Profile_image.png";
import Eth_image from "../../Images/Eth.png";
import data from "../../stats_data";
import Select from 'react-select';


const Stats = () => {
  const options = [
    { value: '1 week', label: 'Last Week' },
    { value: '1 month', label: 'Last Month' }
  ]
  const options0 = [
    { value: 'high', label: 'Favourites' },
    { value: 'low', label: 'Newly Added' }
  ]
  const options1 = [
    { value: 'high', label: 'Favourites' },
    { value: 'low', label: 'Newly Added' }
  ]

  return (
    <>
      <div className={stat.main}>
        <h1>Top NFTs</h1>
        <div className={stat.filter_menu}>
          
            <p>
              The top NFTs on Yes NFT, ranked by volume, floor price and other
              statistics.
            </p>
          
          <div className={stat.filter}>
            <div className={stat.days}>
            <Select options={options} placeholder="Last 7 Days" />
            </div>
            <div className={stat.categories}>
            <Select options={options0} placeholder="All Categories" />
            </div>
            <div className={stat.chain}>
            <Select options={options1}  placeholder="All Chains" />
            </div>
          </div>
        </div>
        <div className={stat.types}>
          <ul>
            <li>Brands/Artist</li>
            <li>Volume</li>
            <li>24h%</li>
            <li>7d%</li>
            <li>Floor Price</li>
            <li>Owners</li>
            <li>Assets</li>
          </ul>
        </div>
        <div className={stat.details}>
          {data.map((user) => (
            <ul>
              <li>
                <img src={profile_image} alt="Profile_image" className={stat.prof}></img>
                <span>{user.artist}</span>
              </li>
              <li>
                <img src={Eth_image} alt="eth_image" className={stat.eth}></img>
                <span>{user.volume}</span>
              </li>
              <li>
                <h3>{user.hours}</h3>
              </li>
              <li>
                <h3>{user.days}</h3>
              </li>
              <li>
                <img src={Eth_image} alt="eth_image" className={stat.eth}></img>{" "}
                <span>{user.price}</span>
              </li>
              <li>
                <h3>{user.owners}</h3>
              </li>
              <li>
                <h3>{user.assets}</h3>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stats;
