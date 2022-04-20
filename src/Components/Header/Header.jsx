import React, { useState } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Header = () => {
    const [showSidebar, setSidebarVisibility] = useState(false);

    const toggleSideDrawer = () => {
        setSidebarVisibility(!showSidebar);
    }

    const closeSidebarHandler = (e) => {
        const id = e.target.id;
        if(id !== 'search-input' && id !== 'user-image' ) {
            setSidebarVisibility(false);
        }
    }

    return (
        <>
            <Toolbar toggle={toggleSideDrawer} closed={closeSidebarHandler}></Toolbar>
            <SideDrawer open={showSidebar} closed={closeSidebarHandler}></SideDrawer>
        </>
    )
}

export default Header;