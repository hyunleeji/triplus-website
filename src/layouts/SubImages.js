import React from 'react'
import leftimage from '../images/iceland-3516723_1920.jpg';

const Subimages = () => {
    return (
        <div>
        <ul className='subimage'>
            <img src={leftimage} />
            <li>
                <h4>iceland</h4>
                <p>GO on a trip! Now!!</p>
                <a herf='#'>더보기</a>
            </li>
        </ul>
    </div>
    )
}

export default Subimages
