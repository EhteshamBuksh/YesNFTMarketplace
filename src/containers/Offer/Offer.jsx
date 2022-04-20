import React from "react";
import ProfileSettingNavigation from "../../components/ProfileSettingNavigation/ProfileSettingNavigation";
import offer from "./Offer.module.css";
import no_offer from '../../images/Offer.png';

const Offer = () => {
  return (
    <>
      <div className={offer.main_container}>
        <ProfileSettingNavigation />

        <div className={offer.container_2}>
          <div className={offer.off_Settings}>
            <div className={offer.off}>
              <h1>Offer Settings</h1>
            </div>
            <div className={offer.off_button}>
              <button>View my Offers</button>
            </div>
          </div>
          <div className={offer.noOffer_image}>
            <img src={no_offer} alt="No_Offer"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
