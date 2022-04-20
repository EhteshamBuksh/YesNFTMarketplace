import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.css";

const NavigationItem = props => {
    return (
        <li key={props.link} className={styles.NavigationItem}>
            <NavLink 
                to={props.link}>{props.children}</NavLink>
        </li>
    )
};

export default NavigationItem;