import React from 'react'

const Card = (Props) => {
    
    
  return (
    <div>
      <div className='Card'>
        <img src={Props.img} alt="user" />
        <h1>{Props.User}, {Props.age}</h1>
      <p>Want to see magic? Click on the button.</p>
      <button>Click Me!</button></div>
    </div>
  )
}

export default Card
