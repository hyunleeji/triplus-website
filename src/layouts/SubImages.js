import React from 'react'
import leftimage from '../images/iceland-3516723_1920.jpg';
import Fade from "react-reveal/Fade";

const Subimages = () => {
    return (
        <div>
        <ul className='subimage'>
            <img src={leftimage} />
            <li>
                <Fade bottom> 
                <h4>iceland</h4>
                <p>GO on a trip! Now!!</p>
                <a herf='/'>더보기</a>
                </Fade>
            </li>
        </ul>
    </div>
    )
}

export default Subimages
