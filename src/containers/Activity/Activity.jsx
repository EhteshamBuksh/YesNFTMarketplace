import React from "react";
import act from "./Activity.module.css";
import profile_image from "../../images/Profile_image.png";
import Eth_image from "../../images/Eth.png";
import data from "../../activity_data";
import exp from "../../containers/Explore/Explore.module.css";
import filter from "../../images/filter_icon_996.png";

const Activity = () => {
  return (
    <>
      <div className={act.main}>
        <div className={exp.main}>
          <div className={exp.filter_section}>
            <div className={exp.filtered}>
              <div>
                {" "}
                <img src={filter} alt="Filter_Image"></img>
              </div>
              <div>
                <h3>Filter</h3>
              </div>
            </div>

            <div className={exp.filter_status}>
              <h3>Event Type</h3>
              <hr />
              <div className={exp.event_buttons}>
                {/* <button className={exp.status_btn01}>Fixed</button> */}
                <button>Listing</button>
                <button>Sales</button>
                <button>Bids</button>
                <button>Transfers</button>
              </div>
            </div>

            <div className={exp.brand}>
              <h3>Brands</h3>
              <div className={exp.brands_details}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Leslie Alexander</h3>
                </div>
              </div>

              <div className={exp.brands_details}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Leslie Alexander</h3>
                </div>
              </div>

              <div className={exp.brands_details}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Leslie Alexander</h3>
                </div>
              </div>

              <div className={exp.brands_details}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Leslie Alexander</h3>
                </div>
              </div>

              <div className={exp.brands_details}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Leslie Alexander</h3>
                </div>
              </div>
            </div>

            <br />
            <div className={exp.brand}>
              Artist
              <div className={exp.brands_details}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Illustrations</h3>
                </div>
              </div>
              <div className={exp.brands_details}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Art</h3>
                </div>
              </div>
              <div className={exp.brands_details}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Domain Name</h3>
                </div>
              </div>
              <div className={exp.brands_details}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Trading Cards</h3>
                </div>
              </div>
              <div className={exp.brands_details}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Collectibles</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={act.container}>
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
              <ul>
                <li>
                  <span>{user.volume}</span>
                </li>
                <li>
                  <img
                    src={profile_image}
                    alt="profile_image"
                    className={act.prof}
                  ></img>
                  <div className={act.artist}>
                    <h3>{user.artist}</h3>
                    <p>Top Dog #1234</p>
                  </div>
                </li>
                <li>
                  <img
                    src={Eth_image}
                    alt="Eth_Image"
                    className={act.eth}
                  ></img>
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
    </>
  );
};

export default Activity;
