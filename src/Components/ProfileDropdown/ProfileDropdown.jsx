import React from 'react';
import { Link } from 'react-router-dom';


import profile from '../../images/profile.png';
import dollar from '../../images/dollar_sign.png';
import column from '../../images/columns.png';
import heart from '../../images/heart.png';
import settings from '../../images/settings.png';
import logout from '../../images/log_out.png';
import styles from './ProfileDropdown.module.css';

const ProfileDownContent = () => {
    return (
        <div className={styles.DropdownContent}>
            <div className={styles.Title}>Jonathan Doe</div>
            <ul className={styles.DropdownList}>
                <li>
                    <Link to='/profile'>
                        <img src={profile} alt = 'profile_image'></img>
                        <span>My Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                        <img src={dollar} alt = 'dollar_image'></img>
                        <span>Manage Funds</span>
                    </Link>
                </li>
                <li>
                    <Link to='/collection'>
                        <img src={column} alt = 'column_image'></img>
                        <span>My Collections</span>
                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                        <img src={heart} alt = 'heart_image'></img>
                        <span>Favourites</span>
                    </Link>
                </li>
                <li>
                    <Link to='/setting'>
                        <img src={settings} alt = 'settings_image'></img>
                        <span>Settings</span>
                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                        <img src={logout} alt = 'logout_image'></img>
                        <span>Log Out</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ProfileDownContent;