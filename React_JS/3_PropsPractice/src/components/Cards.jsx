import React from 'react'
import {Bookmark} from 'lucide-react'

function Cards(props) {
  return (
     <div>
      <div className="card">
<div>
    
        <div className="top">
          <img src={props.brandLogo} alt="" />
            <button>Save<Bookmark size={14}/></button>
        </div>

        <div className="center">
            <h3>{props.company} <span>{props.date}</span></h3>
            <h2>{props.posts}</h2>
            <div className='tag'>
                <h2>{props.tag1}</h2>
                <h2>{props.tag2}</h2>
            </div>
        </div>
</div>

        <div className="bottom">
           <div>
                <h3>{props.pay}</h3>
                <span>{props.location}</span>
            </div>
                <button>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
