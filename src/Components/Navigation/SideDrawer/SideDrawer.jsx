import React from "react";

import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.module.css";

const SideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    
    if(props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open]
    }
    
    return (
        <React.Fragment>
            <Backdrop show={props.open} close={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems closeSideBar={props.closed}/>
                </nav>
            </div>
        </React.Fragment>
    )
};

export default SideDrawer;