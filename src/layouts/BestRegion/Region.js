import React, { Component } from 'react';
import thumb1 from '../../images/mountain-828617_640.jpg';
import '../../../src/App.css'
import { BiMap } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import Information from './Information'
import Review from './Review'
import Fade from "react-reveal/Fade";

const menuList = {
    0: <Information />,
    1: <Review />,
};

class Region extends Component {

    constructor(props) {
        super();

    this.state = {
        menu: 0,
    };
}

changeMenu = (menuIndex) =>{
    this.setState({menu : menuIndex});
}


render(){
    return (
        <Fade top>
        <div style={{
            maxWidth: '1300px', margin: '0 auto',padding: '10rem 0'
        }}>
            <div className='regionone'>
                <div>
                    <img src={thumb1} />
                </div>
                <div className='regiontext'>
                <div className='regioncountry'> 
                    <p>유럽</p>
                    <p>스위스</p>
                </div>
                <div className='regioninfo'>
                    <h2>Lake Lucerne Rigi</h2>
                    <p style={{fontStyle: 'italic'}}>Lake Lucerne Rigi . swiss <BiMap size="20" color="#000"/></p>
                    <p>
                        <span>~2,900,000won</span>
                    </p>
                    <span> Rigi는 스위스 중부에 위치한 산으로 높이는 1,798m이다. 
                    루체른 호와 추크 호에 둘러싸여 있으며 루체른주와 슈비츠주 사이에 걸쳐 있다. 여름에는 하이킹, 겨울에는 스키와 썰매를 즐기려는 사람들이 이 곳을 찾는다.
                    흔히 "산의 여왕"이라는 별칭으로 부르기도 한다.
                    1871년 5월 21일 유럽 최초의 산악 열차가 개통된 곳이다.
                    아르트-골다우(Arth-Goldau) 역과 비츠나우(Vitznau) 역을 연결하는 
                    랙 철도, 베기스(Weggis)에서 리기-칼트바트(Rigi-Kaltbad)를 연결하는 
                    곤돌라 리프트, 크레벨(Kräbel) 역에서 리기-샤이데그(Rigi-Scheidegg) 
                    역을 연결하는 케이블카가 운행된다.</span>
                    <button>항공권 예약하기<BsArrowRight size="25" color="#fff" margin-left="auto"/></button>
                </div>
                </div>
            </div>
                <div className='safety'>
                    <p>Triplus의 여행은 코로나19 바이러스의 안전지침을 철저히 준수합니다</p>
                </div>
                <div className='line'></div>
                <div className='wrapper'>
                <ul className='tabs'>
                    <li className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(0)}>INFOMATION</li>
                    <li className={`${this.state.menu === 1? 'active': ''}`} onClick={() => this.changeMenu(1)}>REVIEW</li>
                </ul>
                </div>
                <div className='contentArea'>
                    {menuList[this.state.menu]}
                </div>
        </div>
        </Fade>
    )
}
}

export default Region