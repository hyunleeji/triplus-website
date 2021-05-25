import React from 'react'
import thumba from '../../../src/images/japan2.jpg'
import thumbb from '../../../src/images/ecigaki.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { okinawa } from "./Okinawainfo"
import { Button, Col } from "antd";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';
  
  SwiperCore.use([Pagination,Navigation]);
//   (
//     okinawa && okinawa.map(value => (
// const Okinawa = () => {

function Okinawa() {

    const Okinawaisland = () => (
        okinawa && okinawa.map(value => (
    <SwiperSlide>
        <li style={{ marginBottom: '3rem'}}>
        <div key='index' className='ranking'>
            <span className='first'></span>
        </div>
            <div className='islandimg'>
                <div className='islands'>
                    <a href='#'>
                        <img style={{ height:'300px'}} src={value.image} />
                    </a>
                </div>
            </div>
            <div className='description'>
                <div className='info'>
                    <h2>{value.name}</h2>
                    <strong>{value.landmark}</strong>
                </div>
            </div>
            </li>
    </SwiperSlide>
    ))
)

    return (
        <div style={{
            display: 'flex',width: '100%', flexDirection:'column'
        }}>
           <div className='topimage'></div>
           <div className='okicontent' >
           <span>Japan - Okinawa</span>
           </div>
           <div>
           <div style={{ textAlign: 'center', margin: '4rem 0', fontSize: '1rem', fontWeight:'500'}}>
               <p>힐링감성 일본 오키나와</p>
               <span>ㅡ</span>
               <p>맑은 바다와 여러가지 볼거리로 가득찬 오키나와로 지금 떠나세요!</p>
           </div>
           <div style={{ display:'flex', justifyContent:'center'}}>
           <Col lg={12} md={12} xs={24}>
            <Swiper spaceBetween={30} slidesPerView={2} scrollbar={{ hide: false }} pagination={{ clickable: true }} className="mySwiper">
               {Okinawaisland()}
            </Swiper>
            </Col>
           </div>
           <div className='islandinfo'>
               <div style={{ margin: '4rem'}}>
                   <h2>첫번째 섬, 요론섬</h2>
                   <span>ㅡ</span>
                   <h1>진정한 쉼을 경험하세요</h1>
                   <p>바다가 살아 숨쉬는 곳 요론섬을 소개합니다.요론섬의 다양한 감성을 만나보세요.</p>
                <div>
                    <Button>더 알아보기</Button>
                </div>
                </div>
                <div>
                    <img style={{ width:'400px', height:'100%'}} src={thumba}/>
                </div>
           </div>
           <div style={{ textAlign: 'center'}}>
           <iframe width="850" height="515" src="https://www.youtube.com/embed/QHx-CBpaCvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
           </div>
           <div className='islandinfo'>
                <div>
                    <img style={{ width:'400px', height:'100%'}} src={thumbb}/>
                </div>
               <div style={{ margin: '4rem'}}>
                   <h2>두번째 섬, 이시가키섬</h2>
                   <span>ㅡ</span>
                   <h1>눈부신 석양을 담아두세요</h1>
                   <p>바다와 노을 스노쿨링을 즐겨보세요. 가오리와 산호초를 볼수도 있답니다.</p>
                <div>
                    <Button>더 알아보기</Button>
                </div>
                </div>
           </div>
           <div style={{ textAlign: 'center', marginBottom: '4rem'}}>
           <iframe width="850" height="515" src="https://www.youtube.com/embed/50Ev6dC3pMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
           </div>
        </div>
        </div>
    )
}
// https://www.skyscanner.co.kr/mp/jnto

export default Okinawa
