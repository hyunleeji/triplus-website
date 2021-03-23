import React from 'react'

const Footer = () => {
    return (
        <div>
        <div className='triplus'>
        <p>항상 가던곳은 지겨우세요?</p>
        <p><strong>triplus</strong>는 새로운 장소를 추천해드립니다</p>
        </div>
        <div className='footer'>
            <div className='leftft'>
                <strong>triplus</strong>
                <p>About Us</p>
                <p>상호: 주식회사 triplus
                주소: 서울시 송파구 백제고분로9길 14, 301(잠실동) 070 4131 5906
                사업등록번호: 232-88-00610 사업자정보확인
                통신판매업신고: 2017-서울송파-0651</p>
            </div>
            <div className='rightftall'>
                <ul className='rightft one'>
                    <li className='name'><a href='#'>triplus official</a></li>
                    <li><a href='#'>카테고리</a></li>
                    <li><a href='#'>triplus story</a></li>
                    <li><a href='#'>이벤트</a></li>
                    <li><a href='#'>리뷰</a></li>
                </ul>
                <ul className='rightft two'>
                    <li className='name'><a href='#'>고객센터</a></li>
                    <li><a href='#'>Q & A</a></li>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'>공지사항</a></li>
                </ul>
                <ul className='rightft three'>
                    <li className='name'><a href='#'>협력사</a></li>
                    <li><a href='#'>하나투어</a></li>
                    <li><a href='#'>인터파크</a></li>
                    <li><a href='#'>노랑풍선</a></li>
                </ul>
                <div className='footersns'>
                    <a href='#'>
                        <img />
                        <img />
                        <img />
                    </a>
                </div>
            </div>
        </div> 
        </div>
    )
}

export default Footer
