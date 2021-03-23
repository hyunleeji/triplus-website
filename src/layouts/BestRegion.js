import React from 'react'
import thumb1 from '../images/mountain-828617_640.jpg';
import thumb2 from '../images/hobbit-4499692_1920.jpg';
import thumb3 from '../images/Marburg_an_der_Lahn.jpg';

const Bestregion = () => {
    return (
        <div className='section'>
        <div className='bestregion max'>
            <p className='heading'>Best Region</p>
            <ul className='bestwrapper'>
                <li>
                    <div className='ranking'>
                        <span className='first'>1st</span>
                    </div>
                    <div className='thumbnail'>
                        <div className='slideimg'>
                            <a href='#'>
                                <img src={thumb1} />
                            </a>
                        </div>
                    </div>
                    <div className='description'>
                        <div className='info'>
                            <h2>Lake Lucerne Rigi</h2>
                            <strong>스위스 Swiss</strong>
                            <p>~2,900,000won</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='ranking'>
                        <span>2st</span>
                    </div>
                    <div className='thumbnail'>
                        <div className='slideimg'>
                            <a href='#'>
                                <img src={thumb2} />
                            </a>
                        </div>
                    </div>
                    <div className='description'>
                        <div className='info'>
                            <h2>Hamillton / Hobbiton</h2>
                            <strong>뉴질랜드 New Zealand</strong>
                            <p>~1,900,000won</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='ranking'>
                        <span>3st</span>
                    </div>
                    <div className='thumbnail'>
                        <div className='slideimg'>
                            <a href='#'>
                                <img src={thumb3} />
                            </a>
                        </div>
                    </div>
                    <div className='description'>
                        <div className='info'>
                            <h2>Marburg</h2>
                            <strong>독일 Germany</strong>
                            <p>~2,400,000won</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Bestregion
