import React from 'react';

import styles from './ProfileSettingNavigation.module.css';
import user from '../../images/user_img.png';
import tag_icon from '../../images/tag.png'; 
import bell from '../../images/bell.png';
import help from '../../images/help.png';
import lock from '../../images/Lock.png'
import ProfileSettingItem from './ProfileSettingItem/ProfileSettingItem';

const ProfileSettingNavigation = () => {

  return (
    <div className={styles.ProfileNavigation}>
      <h3>Settings</h3>
      <ul className={styles.Navigations}>
        <ProfileSettingItem link='/setting'>
          <img src={user} alt='User_Icon'></img>
          <span>Profile</span>
        </ProfileSettingItem>
        <ProfileSettingItem link='/link'>
          <img src={tag_icon} alt='Tag_Icon'></img>
          <span>Links</span>
        </ProfileSettingItem>
        <ProfileSettingItem link='/notific'>
          <img src={bell} alt='Bell_Icon'></img>
          <span>Notifications</span>
        </ProfileSettingItem>
        <ProfileSettingItem link='/verify'>
          <img src={lock} alt='Lock_Icon'></img>
          <span>Two Step Verification</span>
        </ProfileSettingItem>
        <ProfileSettingItem link='/support'>
          <img src={help} alt='Help_Icon'></img>
          <span>Account Support</span>
        </ProfileSettingItem>
      </ul>
    </div>
  )
};

export default ProfileSettingNavigation;
