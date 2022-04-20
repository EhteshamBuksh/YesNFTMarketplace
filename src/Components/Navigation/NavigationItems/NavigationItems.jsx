import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileDownContent from "../../ProfileDropdown/ProfileDropdown";
import gitlab from "../../../images/gitlab.png";
import NavigationItem from "./NavigationItem/NavigationItem";
import { useStateValue } from '../../../store/StateProvider';
import styles from "./NavigationItems.module.css";

const NavigationItems = props => {
    const navigate = useNavigate();
    const [ showDropDownContent, setShowDropDownContent ] = useState(false);

    const goToConnectPage = () => {
        navigate('/connect');
    }

    const handleDropdownFocus = () => {
        setShowDropDownContent(!showDropDownContent);
    }

    const [{wallet},] = useStateValue();

    let dropdownContent = null;
    if(showDropDownContent) {
        dropdownContent = <ProfileDownContent />
    }

    let buttonClasses = [styles.ConnectButton];
    if(wallet) {
        buttonClasses.push(styles.Connected);
    }

    return (
        <div className={styles.Items} onClick={(event) => props.closeSideBar(event)}>
            <div className={styles.SearchBox}>
                <div className={styles.SearchIcon}></div>
                <input id="search-input" className={styles.Input} type='text' placeholder='Search Items, Collections, Accounts'/>
            </div>
            <ul className={styles.NavigationItems}>
                <NavigationItem link="/explore">Explore</NavigationItem>
                <NavigationItem link="/stats">Stats</NavigationItem>
                <NavigationItem link="/get">Resources</NavigationItem>
                <NavigationItem link="/blog">Community</NavigationItem>
            </ul>
            <div className={styles.RightNavigation}>
                <div className={styles.Connect}>
                    <button className={buttonClasses.join(' ')} onClick={goToConnectPage}>{wallet ? (wallet.address.substring(0,10) + '...') : 'Connect'}</button>
                </div>
                <div className={styles.UserImage} id="user-image" onClick={handleDropdownFocus}>
                    {dropdownContent}
                </div>
                <div>{wallet ? (<img  src={wallet.icons}  className={styles.walletIcons}></img>) : (<img src = {gitlab} className={styles.GitImage}></img>)}</div>
            </div>

        </div>
    )
};

export default NavigationItems;