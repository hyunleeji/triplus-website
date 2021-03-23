import React from 'react'
import mainmp4 from '../videos/Train - 3880.mp4'

const Mainvideo = () => {
    return (
        <div className ='mainvideo'>
           <video autoPlay loop muted>
               <source src={mainmp4} type="video/mp4" />
           </video>
        </div>
    )
}

export default Mainvideo
