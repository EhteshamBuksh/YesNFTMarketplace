import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

const Layout = props => {

    return (
        <div className={styles.Layout}>
            <Header />
            <main className={styles.Content}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;