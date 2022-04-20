import React from 'react'
import globe from "../../images/globe_887.png";
import profile from "../../images/Profile_image.png";
import exporrt from "../../images/export_112.png";
import setting from "../../images/setting_888.png";
import cover from "../../images/Cover_Image.png";
import coll from "../../containers/Collections/Collections.module.css";


const Usercollection = () => {
  return (
<>

<div className={coll.banner_img}>
        <img src={cover} alt="cover_Image"></img>
      </div>

      <div className={coll.dp}>
        <div className={coll.dp_1}>
          <div className={coll.dp_1_img}>
            <img src={globe} alt="Globe_Image"></img>
          </div>
          <div className={coll.dp_1_weblink}>
            <p>www.jonathandoe.yesnft.com</p>
          </div>
        </div>

        <div className={coll.dp_2}>
          <div className={coll.dp_2_img}>
            <img src={profile} alt="Profile_Image"></img>
          </div>
        </div>

        <div className={coll.dp_3}>
          <div>
            <img src={exporrt} alt="Export"></img>
          </div>
          <div>
            <img src={setting} alt="Setting"></img>
          </div>
        </div>
      </div>

      <div className={coll.user_info}>
        <h2>Jonathan Doe</h2>
        <div className={coll.user_address}>
          <p>0xc4c16a125..b21a</p>
          {/* <img src={copy_add} alt="Copy_Address_Icon"></img> */}
        </div>
      </div>

      <div className={coll.details}>
        <div>
          <h3>7.5K</h3>
          <p>Items</p>
        </div>

        <div>
          <h3>3.5K</h3>
          <p>Owners</p>
        </div>

        <div>
          <h3>3.5K</h3>
          <p>Floor price</p>
        </div>

        <div>
          <h3>43.5K</h3>
          <p>Volume Trade</p>
        </div>
      </div>
      <div className={coll.about}>
        <p>
          Pavel Sokov is a renowned portrait painter. When he was 24 years old,
          Sokov was approached by Time to paint the cover of the Time's....{" "}
          <span>Read More</span>
        </p>
      </div>


</>  )
}

export default Usercollection