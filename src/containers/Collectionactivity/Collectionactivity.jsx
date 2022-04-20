import React, { useState } from "react";
import coll from "../../containers/Collections/Collections.module.css";
import exp from "../../containers/Explore/Explore.module.css";
import act from "../../containers/Activity/Activity.module.css";
import filter from "../../images/filter_icon_996.png";
import profile_image from "../../images/Profile_image.png";
import Eth_image from "../../images/Eth.png";
import uparrow from '../../images/up_arrow.png';
import downarrow from '../../images/down_arrow.png';
import data from "../../activity_data";
// import Select from 'react-select';
import { Link } from 'react-router-dom';
import Usercollection from '../../components/Usercollection/Usercollection';

const Collectionactivity = () => {
  // const options = [
  //   { value: 'high', label: 'High to Low' },
  //   { value: 'low', label: 'Low to High' }
  // ]
  // const options0 = [
  //   { value: 'last60', label: 'Last 60 Days' },
  //   { value: 'last30', label: 'Last 30 Days' }
  // ]
  const [show0, setShow0] = useState(true);

  return (
    <>
      <Usercollection />
      <div className={coll.main}>
        <div className={exp.filter_section}>
          <div className={exp.filtered}>
            <div>
              <img src={filter} alt="Filter_Image"></img>
            </div>
            <div>
              <h3>Filter</h3>
            </div>
          </div>
          <div className={exp.filter_status}>
            <div className={exp.status} onClick={() => setShow0(!show0)}>
              <h3>Status</h3>
              {show0 ? (
                <img src={downarrow} alt="down arrow" />

              ) : (
                <img src={uparrow} alt="up arrow" />

              )}

            </div>
            {show0 ? (

              <div className={exp.status_buttons}>
                <button className={exp.status_btn01}>Fixed</button>
                <button>On Auction</button>
              </div>
            ) : null}

          </div>


        </div>

        <div className={act.container}>
          <div className={[coll.filter_searchbar, coll.filter_extra].join(' ')}>
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

              <div className={coll.search_options}>
                <Select options={options0} placeholder="Last 90 Days" />
              </div>
              <div className={coll.search_options}>
                <Select options={options} placeholder="Purchase" />
              </div>

            </div> */}
          </div>

          <div className={act.coll_data}>
            <div className={act.types}>
              <ul>
                <li>Items</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>From</li>
                <li>To</li>
                <li>Time</li>
              </ul>
            </div>
            <div className={act.details}>
              {data.map((user) => (
                <ul key="uni">
                  <li>
                    <span>Offer</span>
                  </li>
                  <li>
                    <img src={profile_image} className={act.prof} alt="Profile_image"></img>
                    <div className={act.artist}>
                      <h3>{user.artist}</h3>
                      <p>Top Dog #1234</p>
                    </div>
                  </li>
                  <li>
                    <img src={Eth_image} className={act.eth} alt="Ethereum_Image"></img>
                    <h3>{user.hours}</h3>
                  </li>
                  <li>
                    <h3>{user.days}</h3>
                  </li>
                  <li>
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
        </div>

      </div>
    </>)
}

export default Collectionactivity