import React from "react";
import foot from "./Footer.module.css";
import fb from '../../images/facebook_icon.png';
import instagram from '../../images/instagram_icon.png';
import twitter from '../../images/twitter_icon.png';
import linkedin from '../../images/linkedin_icon.png';


const Footer = () => {

  const options = [
    {
      label: "  English",
      value: "english",
    },
    {
      label: "Chinese",
      value: "chinese",
    },
    {
      label: "Japanese",
      value: "japanese",
    },  {
      label: "Hindi",
      value: "hindi",
    },
  ];


  return (
    <>
      <div className={foot.footer}>
        <div className={foot.foot_grids}>
          <div className={foot.foot_01}>
            <div className={foot.foot_101}>
              <h3>Get the Latest NFT updates</h3>
              <div className={foot.ft_email}>
                <div className={foot.em_input}>
                  <input
                    type="email"
                    name="email"
                    placeholder="  Enter your Email"
                  />
                </div>
                <div className={foot.em_btn}>
                  <button>I'm in</button>
                </div>
              </div>
            </div>

            <div className={foot.foot_102}>
              <h2>NFT</h2>
              <p>Explore</p>
              <p>Help Center</p>
              <p>Blog</p>
              <p>Jobs</p>
              <p>Become a partner</p>
              <p>Bug Bounty</p>
            </div>

            <div className={foot.foot_103}>
              <h2>Community</h2>
              <p>ARAI Token</p>
              <p>Discussion</p>
              <p>Voting</p>
              <p>Suggest Features</p>
              <p>NFT Protocol</p>
              <p>Subscribe</p>
            </div>

            <div className={foot.foot_104}>
              <h2>Language</h2>
              <div>
                <select>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <hr className={foot.hiring}/>
          <div className={foot.foot_02}>
            <div className={foot.foot_201}>
              <div>© YES NFT, Inc. All rights reserved.</div>
              <div>Terms</div>
              <div>Privacy policy</div>
            </div>

            <div className={foot.foot_202}>
              <img src={fb} alt="facebook icon" />
              <img src={instagram} alt="instagram icon" />
              <img src={twitter} alt="twitter icon" />
              <img src={linkedin} alt="linkedin icon" />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
