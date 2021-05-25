import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "antd";

function TotalCartList(props) {

    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const cartItems = () => (        
        props.carts && props.carts.map((cartlist, index) => (
            // <tr style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', alignItems: 'center'}}key={index}>
            //     <td>
            //         <img style={{ width: '90px'}} 
            //         src={renderCartImage(cartlist.images)}/>
            //     </td>
            //     <td>{cartlist.quantity}EA</td>
            //     <td>{cartlist.price}원</td>
            // </tr>
            <React.Fragment>
            <div style={{ display: 'flex', margin:'0 2rem', justifyContent: 'space-around', textAlign: 'center', alignItems: 'center', margin: '2 0rem' }}key={index}>
                <div style={{ float: 'left' }}>
                    <img style={{ width: '100px', height: '70px'}} 
                    src={renderCartImage(cartlist.images) }/>
                </div>
                <span>{cartlist.country}<br />{cartlist.region}<br /> {cartlist.quantity} 명</span>
                <span>{cartlist.price} KRW</span>
                <Button onClick={() => props.removeItem(cartlist._id)}><AiOutlineClose /></Button>
            </div>
            <hr />
            </React.Fragment>
        ))
    )

    return (
        <div>
            <div style={{ display:'flex', justifyContent: 'space-around', textAlign: 'center', alignItems: 'center'}}>
                <span>상품정보</span>
                <span>옵션</span>
                <span>상품금액</span>
                <span> </span>
            </div>
            <hr />
            {cartItems()}
        </div>
    )
}

export default TotalCartList
