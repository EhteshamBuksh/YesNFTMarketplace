import React from "react";
import coll from "./Collections.module.css";
// import search_icon from '../../images/search_icon.png'
// import grid from '../../images/grid.png';
// import grids from '../../images/gridsss.png'
import Filters from "../../components/Filters/Filters";
// import Select from 'react-select';
import NFTs from "../../components/NFTs/NFTs";
import { Link } from "react-router-dom";
import Usercollection from "../../components/Usercollection/Usercollection";

const Collections = () => {
  // const options = [
  //   { value: 'high', label: 'High to Low' },
  //   { value: 'low', label: 'Low to High' }
  // ]

  return (
    <>
      <Usercollection />
      <div className={coll.main}>
        <Filters />
        <div>
          <div className={coll.filter_searchbar}>
            <div className={coll.page_container}>

              <div className={coll.pages}>
                <Link to="/collection">
                  <h3>Items</h3>
                </Link>
                <Link to="/collection_activity">
                  <h3>Activity</h3>
                </Link>
              </div>
            </div>

            {/* <div className={coll.filter_search}>
              <div className={coll.search}>
                <img src={search_icon} alt="Search icon" />
                <input type="search" placeholder="Search" />
              </div>
              <div className={coll.search_options}>
                <Select options={options} placeholder="Popularity" />
              </div>
              <div className={coll.search_options}>
                <Select options={options} placeholder="Sort By" />
              </div>
              <div className={coll.search_image}>
                <img src={grid} alt="grid icon" />
                <img src={grids} alt="gridss icon" />

              </div>
            </div> */}
          </div>

          <NFTs />

        </div>
      </div>
      <div className={coll.nft_button}>
            <button>View More</button>
          </div>

    </>
  );
};

export default Collections;
