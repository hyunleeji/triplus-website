import React, { useState, useEffect } from 'react';
import '../../../src/App.css'
import { BiMap } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import Information from '../BestRegion/Information'
import Review from '../BestRegion/Review'
import Fade from "react-reveal/Fade";
import Axios from 'axios';
import ProductImage from './ProductImage';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../_actions/user_action';
import { message, Button } from 'antd';

const menuList = {
    0: <Information />,
    1: <Review />,
};

function ImageDetailPage(props) {

    const imagesId = props.match.params.imagesId
    const variable = { imagesId: imagesId }

    const [Menulist, setMenulist] = useState(0)
    const [Imageid, setImageid] = useState({})

    const changeMenu = (index) => {
        setMenulist(index)
    }

    const dispatch = useDispatch();

    const cartHandler = () => {

        dispatch(addToCart(Imageid._id))
        message.info('장바구니에 담겼습니다');
    }

    useEffect(() => {

        Axios.get(`/api/images/images_by_id?id=${imagesId}&type=single`)
            .then(response => {
                setImageid(response.data[0])
            })
            .catch(err => alert(err))

        // Axios.post('/api/images/getImageDetail', variable)
        //     .then(response => {
        //     if(response.data.success) {    
        //         setImageid(response.data.imagesid)
        //     } else {
        //         alert('이미지 정보를 가져오지 못했습니다.')
        //     }
        // })

    }, [])

    return (
        <Fade top>
        <div style={{
            maxWidth: '1300px', margin: '0 auto',padding: '10rem 0'
        }}>
            <div className='regionone'>
                <div>
                    <ProductImage list={Imageid}/>
                    {/* <img src={`http://localhost:5000/${Imageid.images}`} /> */}
                </div>
                <div className='regiontext'>
                <div className='regioncountry'> 
                    <p>{Imageid.continents}</p>
                    <p>{Imageid.country}</p>
                </div>
                <div className='regioninfo'>
                    <h2>{Imageid.region}</h2>
                    <p style={{fontStyle: 'italic'}}>{Imageid.region} . {Imageid.country} <BiMap size="20" color="#000"/></p>
                    <p>
                        <span>{Imageid.price} KRW</span>
                    </p>
                    <span>{Imageid.description} </span>
                    <button onClick={cartHandler}>장바구니 담기</button>
                    {/* <BsArrowRight size="25" color="#fff" margin-left="auto"/> */}
                </div>
                </div>
            </div>
                <div className='safety'>
                    <p>Triplus의 여행은 코로나19 바이러스의 안전지침을 철저히 준수합니다</p>
                </div>
                <div className='line'></div>
                <div className='wrapper'>
                <ul className='tabs'>
                    <li className={Menulist === 0? 'active': ''} onClick={() => changeMenu(0)}>INFOMATION</li>
                    <li className={Menulist === 1? 'active': ''} onClick={() => changeMenu(1)}>REVIEW</li>
                </ul>
                </div>
                <div className='contentArea'>
                    {menuList[Menulist]}
                </div>
        </div> 
        </Fade>
    )
}

export default ImageDetailPage
