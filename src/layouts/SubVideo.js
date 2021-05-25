import React from 'react'
import submp4 from '../videos/Arch - 30121.mp4'

const SubVideo = () => {
    return (
        <div className ='subvideo'>
           <video autoPlay loop muted>
               <source src={submp4} type="video/mp4" />
           </video>
        </div>
    ) 
}

export default SubVideo
