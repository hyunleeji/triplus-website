import React from 'react'
import airplane from '../images/airplane.jpg';
import boat from '../images/boat.jpg';
import swiss from '../images/bridge-4636745_1280.jpg';
import denmark from '../images/denmark-1095154_1280.jpg';
import amsterdam from '../images/amsterdam-4045137_1280.jpg';
<<<<<<< HEAD
import Fade from "react-reveal/Fade";

const Reservation = () => {
    return (
        <div className='section' id='reservation'>
        <div className='reservation max'>
        <Fade bottom> 
=======

const Reservation = () => {
    return (
        <div className='section'>
        <div className='reservation max'>
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
        <p className='heading'>Reservation</p>
        <ul className='bestwrapper'>
            <li>
                <div className='thumbnail'>
                    <div className='slideimg'>
                        <a href='#'>
                            <img src={swiss} />
                        </a>
                    </div>
                </div>
                <div className='description'>
                    <div className='info'>
                        <div className='transport'>
                            <img src={airplane} />
                        </div>
                        <h2><a herf="#">[스위스]취리히 비행기 왕복티켓</a></h2>
                        <strong>Lake Lucerne Rigi</strong>
                        <h4>일반석 왕복</h4>
                        <p>KRW 2,900,000원</p>
                    </div>
                </div>
            </li>
            <li>
                <div className='thumbnail'>
                    <div className='slideimg'>
                        <a href='#'>
                            <img src={denmark} />
                        </a>
                    </div>
                </div>
                <div className='description'>
                    <div className='info'>
                        <div className='transport'>
                            <img src={boat} />
                        </div>
                        <h2>[덴마크]보른홀름행 배편 예약</h2>
                        <strong>Lake Lucerne Rigi</strong>
                        <h4>일반석 왕복</h4>
                        <p>KRW 150,000원</p>
                    </div>
                </div>
            </li>
            <li>
                <div className='thumbnail'>
                    <div className='slideimg'>
                        <a href='#'>
                            <img src={amsterdam} />
                        </a>
                    </div>
                </div>
                <div className='description'>
                    <div className='info'>
                        <div className='transport'>
                            <img src={airplane} />
                        </div>
                        <h2>[네덜란드]암스테르담 비행기 왕복티켓</h2>
                        <strong>Lake Lucerne Rigi</strong>
                        <h4>일반석 왕복</h4>
                        <p>KRW 1,370,000원</p>
                    </div>
                </div>
            </li>
        </ul>
<<<<<<< HEAD
        </Fade>
        <Fade bottom> 
        <div className='triplus'>
        <p>항상 가던곳은 지겨우세요?</p>
        <p><strong>triplus</strong>는 새로운 장소를 추천해드립니다</p>
        </div>
        </Fade>
=======
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
    </div>
    </div>
    )
}

export default Reservation
