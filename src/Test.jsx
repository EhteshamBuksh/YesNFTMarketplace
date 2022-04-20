import React from 'react';
import data from './data.jsx'

const Test = () => {
  return (
<>
{
    data.map((user =>(
        <div>
            {user.name}
        </div>
    )))
}
</>  )
}

export default Test