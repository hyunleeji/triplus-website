import React from 'react';
import leftimage from '../images/japan1.jpg';
import rightimage from '../images/italy-crema2.jpg';

const Mainimages = () => {
    return (
        <div>
            <ul className='mainimage'>
                <li>
                    <p>감성으로 물든 곳<br /><span>Japan - Okinawa</span></p>
                    <a herf='#'>더보기</a>
                    <img src={leftimage} />
                </li>
                <li>
                    <p>평화의 상징<br /><span>Italy - Crema</span></p>
                    <a herf='#'>더보기</a>
                    <img src={rightimage} />
                </li>
            </ul>
        </div>
    )
}
export default Mainimages