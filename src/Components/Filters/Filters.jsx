import React, { useState } from "react";
import exp from "../../containers/Explore/Explore.module.css";
import filter from "../../images/filter_icon_996.png";
import uparrow from '../../images/up_arrow.png';
import downarrow from '../../images/down_arrow.png';
import search_icon from '../../images/search_icon.png';



const Filters = () => {
  const [show0, setShow0] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);

  const [myStyle, setMyStyle] = useState({
    color: 'white',
    background: 'linear-gradient(95.49deg, #00F0FD -36.87%, #004EC2 98.63%)'
  })

  const [newStyle, setNewStyle] = useState({
    color: 'black',
    background: '#F5F5F5'
  })

  const toggleFunction = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        background: '#F5F5F5'
      })
      setNewStyle({
        color: 'white',
        background: 'linear-gradient(95.49deg, #00F0FD -36.87%, #004EC2 98.63%)'
      })
    }
  }

  const toggFunction = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        background: 'linear-gradient(95.49deg, #00F0FD -36.87%, #004EC2 98.63%)'
      })
      setNewStyle({
        color: 'black',
        background: '#F5F5F5'
      })
    }
  }

  return (
    <>
      {/* <div className={exp.main}> */}
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
              <button onClick={toggFunction} style={myStyle}>Fixed</button>
              <button onClick={toggleFunction} style={newStyle}>On Auction</button>
            </div>
          ) : null}

        </div>

        <div className={exp.filter_price}>
          <div className={exp.price} onClick={() => setShow1(!show1)}>
            <h3>Price</h3>
            {show1 ? (
              <img src={downarrow} alt="down arrow" />

            ) : (
              <img src={uparrow} alt="up arrow" />

            )}            </div>
          {show1 ? (
            <div>
              <div className={exp.price_matic}>
                <h3>Matic</h3>
              </div>
              <div className={exp.price_inputs}>
                <input type="number" placeholder="Min"></input>
                <input type="number" placeholder="Max"></input>
              </div>
              <button>Apply</button>
            </div>
          ) : null}

        </div>

        <div className={exp.brand}>
          <div className={exp.brand_head} onClick={() => setShow2(!show2)}>
            <h3>Brands</h3>
            {show2 ? (
              <img src={downarrow} alt="down arrow" />

            ) : (
              <img className={exp.uparr} src={uparrow} alt="up arrow" />

            )}            </div>
          {show2 ? (

            <div>
              <div className={exp.search}>
                <img src={search_icon} alt="Search icon" />
                <input type="search" placeholder="  Search" />
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
                  <h3>Guy Hawkins</h3>
                </div>
              </div>

              <div className={exp.brands_details}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Theresa Webb</h3>
                </div>
              </div>

              <div className={exp.brands_details}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Wade Warren</h3>
                </div>
              </div>

              <div className={[exp.brands_details, exp.last_brand].join(' ')}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Devon Lane</h3>
                </div>
              </div>
            </div>
          ) : null}

        </div>

        <br />
        <div className={exp.brand}>
          <div className={exp.artist} onClick={() => setShow3(!show3)}>
            <h3>Artist</h3>
            {show3 ? (
              <img src={downarrow} alt="down arrow" />

            ) : (
              <img src={uparrow} alt="up arrow" />

            )}            </div>
          {show3 ? (

            <div>
              <div className={exp.search}>
                <img src={search_icon} alt="Search icon" />
                <input type="search" placeholder="  Search" />
              </div>
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
              <div className={[exp.brands_details, exp.last_brand].join(' ')}>
                <div className={exp.brand_img}></div>
                <div>
                  <h3>Collectibles</h3>
                </div>
              </div>
            </div>
          ) : null}

        </div>
      </div>


      {/* </div> */}
    </>
  );
};

export default Filters;
