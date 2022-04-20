import React from "react";
import styles from "./Not.module.css";
import ProfileSettingNavigation from "../../components/ProfileSettingNavigation/ProfileSettingNavigation";

const Notification = () => {

  return (
    <div className={['flex', styles.NotificationSettings, ].join(' ')}>
      <ProfileSettingNavigation />
      <div className={['flex flex-col', styles.NotificationSettingsContent].join(' ')}>
        <div className={['flex flex-s-btwn flex-v-align', styles.NotificationSettingsHeading, ].join(' ')}>
          <h3>Notification Settings</h3>
        </div>
        <div className={styles.set_checkbox}>
          <input type="checkbox" defaultChecked></input>
          <span>Item Purchased</span>
          <p>When you buy an NFT</p>

          <input type="checkbox" defaultChecked></input>
          <span>Bid Activity</span>
          <p>Update about your current bidding status</p>

          <input type="checkbox" defaultChecked></input>
          <span>Price Change</span>
          <p>Price change on one of your favourite or newly added NFTs</p>

          <input type="checkbox"></input>
          <span>Auction Expiration</span>
          <p>Update about NFT auction expiration</p>
          <button>Save</button>
        </div>
      </div>
    </div>
  )
};

export default Notification;
