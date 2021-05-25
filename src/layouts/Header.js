import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
    return (
    <nav className ='navbar'>
    <div className ='logo'>triplus</div>
    <div className ='menubar'>
        <div className ='leftmenu'>
            <h2><a herf='#'>Country</a></h2>
        <div className='categoryopen'>
        <div className='allmenu'>
            <div className='continent'>
                <li><a href="">유럽</a></li>
                <li><a href="">아프리카</a></li>
                <li><a href="">북아메리카</a></li>
                <li><a href="">오세아니아</a></li>
                <li><a href="">북극/남극</a></li>
            </div>
            <div className='country'>
            <div className='euroup title'>
            <div className='category'>
            <ul>
                <li><a herf='#'>스위스</a></li>
                <li><a herf='#'>프랑스</a></li>
                <li><a herf='#'>포르투갈</a></li>
            </ul>
            </div>
            </div>
            <div className='africa title'>
            <div className='category'>
            <ul>
                <li><a herf='#'>아메리카</a></li>
                <li><a herf='#'>시리아</a></li>
                <li><a herf='#'>포르투갈</a></li>
            </ul>
            </div>
            </div>
            <div className='africa title'>
            <div className='category'>
            <ul>
                <li><a herf='#'>안녕하세요</a></li>
                <li><a herf='#'>시리아</a></li>
                <li><a herf='#'>포르투갈</a></li>
            </ul>
            </div>
            </div>
            </div>
            {/* <li><a href="">아프리카</a></li>
            <li><a href="">북아메리카</a></li> 
            <li><a href="">오세아니아</a></li> 
            <li><a href="">북극/남극</a></li>  */}
        </div>
        </div>
        </div>
        <div className ='rightmenu'>
            <div className='searchbtn'>
            <BiSearch size="20" color="#fff"/>
            </div>
            <div className='country-all'>
                <div className='country-wrap'>
                    <IoIosArrowDown size="20" color="#fff"/>
                    <a>KOR</a>
                </div>
                <ul>
                    <li><a href="">KOR</a></li>
                    <li><a href="">ENG</a></li>
                    <li><a href="">JPN</a></li>
                    <li><a href="">CHI</a></li>
                </ul>
            </div>
            <li><a href="">Cart</a></li>
            <li><a href="">회원가입</a></li> 
            <li><a href="">로그인</a></li> 
        </div>
        </div>
    </nav>
    )
}

export default Header
