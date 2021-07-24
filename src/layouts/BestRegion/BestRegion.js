import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import Fade from "react-reveal/Fade";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css"
import SwiperCore, {
    Scrollbar
  } from 'swiper/core';

SwiperCore.use([Scrollbar]);

function BestRegion() {

    const [ViewImg, setViewImg] = useState([])

    useEffect(() => {
        
        Axios.post('/api/images/viewimages')
            .then(response => {
                if(response.data.success) {
                    setViewImg(response.data.viewimg)
                } else {
                    alert('상품을 가져오는데 실패했습니다.')
                }
            })
    }, [])

    const BestRegionLists = ViewImg.map((value, index) => {

    return <React.Fragment>
                <SwiperSlide>
                <li>
                <div key='index' className='ranking'>
                    <span className='first'>{index + 1}st</span>
                </div>
                    <div className='thumbnail'>
                        <div className='slideimg'>
                            <a href={`/images/${value._id}`}>
                                <img src={`http://localhost:5000/${value.images[0]}`} />
                            </a>
                        </div>
                    </div>
                    <div className='description'>
                        <div className='info'>
                            <h2>{value.region}</h2>
                            <strong>{value.country}</strong>
                            <p>~{value.price}won</p>
                        </div>
                    </div>
                </li>
                </SwiperSlide>
    </React.Fragment>
})

    
    return (
        <div>
            <Fade bottom>
            <div className='section' id='bestregion'>
            <div className='bestregion max'> 
                <p className='heading'>Best Region</p>
                <ul className='bestwrapper'>
                <Swiper
                scrollbar={{ hide: false }} 
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                        slidesOffsetBefore: 5,
                        slidesPerView: 1,
                        spaceBetween: 8,
                        centeredSlides: false,
                    },
                    500: {
                        slidesOffsetBefore: 16,
                        slidesPerView: 2,
                        spaceBetween: 8,
                        centeredSlides: false,
                    },
                    1300 : {
                        slidesOffsetBefore: 16,
                        slidesPerView: 3,
                        spaceBetween: 8,
                        centeredSlides: false,
                    }
                }}
                className="mySwiper"
                
                >
                {BestRegionLists}
                </Swiper>
                </ul>
            </div>
            </div>
            </Fade>
        </div>
    )
}

export default BestRegion
