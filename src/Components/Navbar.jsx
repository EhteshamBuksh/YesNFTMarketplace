import React, {useState} from 'react';
import {Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <div className='navbar'>
      <Link to = "/">

<div className='logoname'>

<div className='logo'>

</div>

<div className='brandName'>

</div>
</div>
</Link>


<div className={`items ${isOpen && "open"}`}>

<div className='search-box'>
<div className='search'></div>
<input type= 'text' placeholder='          Search items, Collections, Accounts'/>
<div className='list-items'>

<ul>
    <li>Explore</li>
    <li>Stats</li>
    <li>Resources</li>
    <li>Community</li>

</ul>
</div>



</div>

<Link to = "/connect">
<button>Connect</button>
</Link>
<div className='userImage'></div>
<div className='gitImage'></div>
</div>
<div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
<div className='bar'></div>
</div>
      </div>
  </>;
};

export default Navbar;
