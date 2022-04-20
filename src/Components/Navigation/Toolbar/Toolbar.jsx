import React from "react";
import { Link } from "react-router-dom";

import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./Toolbar.module.css";

const Toolbar = (props) => {
    
    return (
        <header className={styles.Toolbar}>
            <Link to='/'>
                <span className={styles.LogoName}>
                    <span className={styles.Logo}></span>
                    <span className={styles.BrandName}></span>
                </span>
            </Link>
            <nav className={styles.DesktopOnly}>
                <NavigationItems closeSideBar={props.closed} />
            </nav>
            <DrawerToggle clicked={props.toggle}></DrawerToggle>
        </header>
    )
};

export default Toolbar;