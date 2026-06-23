import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  console.log(props.company);
  
  return (
    
    <div className='Card'>
      <div>
        <div className="Top">
          <img src={props.brandLogo} alt="nachoo" />
          <button>Save <Bookmark size={12}/> </button>
        </div>

        <div className="Center">
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2>{props.position}</h2>
          <div className='Tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>

      <div className="Bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
