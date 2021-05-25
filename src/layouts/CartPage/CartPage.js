import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { getCartItems, removeCartItem } from '../../_actions/user_action'
import TotalCartList from './TotalCartList'
import { Button } from 'antd';

function CartPage(props) {

    const dispatch = useDispatch();
    
    const [CartInfo, setCartInfo] = useState(0)
    const [Total, setTotal] = useState(false)

    useEffect(() => {

        let cartItems=[]
        
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                })
                dispatch(getCartItems(cartItems, props.user.userData.cart))
                    .then(response => { cartinfoTotal(response.payload) })
            }
        }
    }, [props.user.userData])

    let cartinfoTotal = (cartDetail) => {

        let total = 0;

        cartDetail.map(item => {
            total += parseInt(item.price,10) * item.quantity
        })

        setCartInfo(total)
        setTotal(false)
    }

    const removeCart = (imageId) => {

        dispatch(removeCartItem(imageId))
            .then(response => {

                if(response.payload.imageInfo.length <= 0) {
                    setTotal(true)
                }
            })

    }

    return (
        <div style={{ width: '70%', margin: '3rem auto' }}>
            <div style={{ fontSize: '1.5rem' }}>My Cart</div>
            <hr />
            <TotalCartList carts={props.user.cartDetail} removeItem={removeCart}/>
            <div style={{ textAlign: 'end', margin: '2rem' }} >
                <h2>총 결제금액 : ${CartInfo}</h2>
                <Button style={{ width: '15%'}}color='black' type='button'>
                결제하기
                </Button>
            </div>
        </div>
    )
}

export default CartPage
