import React from 'react';
import foot from '../Styles/Footer.module.css';

const Footer = () => {
  return (
<>
<div className={foot.footer}>
<div className={foot.foot_grids}>
<div className={foot.foot_01}>
<div className={foot.foot_101}>
<h2>Get the Latest NFT updates</h2>
<div className={foot.ft_email}>
<div className={foot.em_input}><input type="email" name="email" placeholder='Enter your Email'/></div>
<div className={foot.em_btn}><button>I'm in</button></div>
</div>
</div>

<div className={foot.foot_102}>
   <h4>NFT</h4> 
   <p>Explore</p>
   <p>Help Center</p>
   <p>Blog</p>
   <p>Jobs</p>
   <p>Become a partner</p>
   <p>Bug Bounty</p>

</div>


<div className={foot.foot_103}>
<h4>Community</h4> 
   <p>ARAI Token</p>
   <p>Discussion</p>
   <p>Voting</p>
   <p>Suggest Features</p>
   <p>NFT Protocol</p>
   <p>Subscribe</p>
</div>


<div className={foot.foot_104}>
    <h2>Language</h2>
    <div><h3>Engllish &#709;</h3></div>
</div>

</div>
<div className={foot.foot_02}>
<div>© NFT, Inc. All rights reserved.</div>
<div>Terms</div>
<div>Privacy policy</div>
<div></div>

</div>

</div>

</div>
</> 
 )
}

export default Footer