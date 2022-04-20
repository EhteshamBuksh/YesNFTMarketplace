import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ProfileSettingItem.module.css';

const ProfileSettingItem = props => {
    return (
        <li className={styles.ProfileSettingItem}>
            <NavLink exact="true" to={props.link}
                className={(navData) => navData.isActive ? styles.Active : ''}>{props.children}</NavLink>
        </li>
    )
}

export default ProfileSettingItem;