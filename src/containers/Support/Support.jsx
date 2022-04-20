import React, { useState } from "react";

import styles from "./Support.module.css";
import ProfileSettingNavigation from "../../components/ProfileSettingNavigation/ProfileSettingNavigation";

const Support = () => {
  const [show0, setShow0] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className={['flex', styles.AccountSupport, ].join(' ')}>
      <ProfileSettingNavigation />
      <div className={['flex flex-col', styles.AccountSupportContent].join(' ')}>
        <div className={['flex flex-s-btwn flex-v-align', styles.AccountSupportHeading, ].join(' ')}>
          <h3>Account Support</h3>
        </div>
        <div className={styles.questions}>
            {/* FAQs */}

            <div className={styles.faq_section}>
              <div className={styles.faqs}>
                <div onClick={() => setShow0(!show0)} className={styles.faq}>
                  <h3>
                    General help<button className={styles.down_arr}>
                      <span>&#709;</span>
                    </button>
                  </h3>
                </div>
                <div className={styles.togg}>
                  {show0 ? (
                    <p>
                      Visit our help center to learn how to get started with buying,
                      selling, and creating.
                    </p>
                  ) : null}
                </div>
                <hr />
                <div onClick={() => setShow1(!show1)} className={styles.faq}>
                  <h3>
                    Contact Yes NFT Support
                    <button className={styles.down_arr}>
                      <span>&#709;</span>
                    </button>
                  </h3>
                </div>
                <div className={styles.togg}>
                  {show1 ? (
                    <p>
                      Visit our help center to learn how to get started with buying,
                      selling, and creating.
                    </p>
                  ) : null}
                </div>
                <hr />
                <div onClick={() => setShow2(!show2)} className={styles.faq}>
                  <h3>
                    Help with a compromised Account
                    <button className={styles.down_arr}>
                      <span>&#709;</span>
                    </button>
                  </h3>
                </div>
                <div className={styles.togg}>
                  {show2 ? (
                    <p>
                      If you believe your account has been compromised, let us know and we can lock your account. This will disable items in your wallet from being bought, sold, or transferred using NFT. Learn more.                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
};

export default Support;
