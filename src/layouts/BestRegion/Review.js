import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BsStarFill } from 'react-icons/bs';
import { Button } from 'antd';

function Review(props) {
   
        const user = useSelector(state => state.user)
        console.log(user)

        return (
            <div>
                <Button style={{float: 'right'}}>리뷰쓰기</Button>
                    <h2>고객리뷰</h2>
                    <hr />
                    <div style={{ display: 'flex', marginTop: '2rem'}}>
                    <div className='profile'>
                        <span></span>
                    </div>
                    <div style={{ marginLeft: '1rem'}}>
                    <ul style={{ display:'flex', color:'rgb(250, 10, 10)'}}>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                    </ul>
                <p>{user.userData.name}</p>
                <p>재밌고 즐겁게 잘 다녀왔습니다~</p>
                {/* <p>{user.userData.email}</p> */}
                </div>
                </div>
                    <div style={{ display: 'flex', marginTop: '1rem'}}>
                    <div className='profile'>
                        <span></span>
                    </div>
                    <div style={{ marginLeft: '1rem'}}>
                    <ul style={{ display:'flex', color:'rgb(250, 10, 10)'}}>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                    </ul>
                <p>{user.userData.name}</p>
                <p>너무 힐링되는 여행이었습니다. 다음에 또 이용할게요~ 감사합니다~~!!</p>
                {/* <p>{user.userData.email}</p> */}
                </div>
                </div>
            </div>
        )
}



export default Review