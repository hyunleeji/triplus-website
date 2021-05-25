import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM
} from './types';
import { USER_SERVER } from '../layouts/Config.js';


export function registerUser(dataTosubmit) {

    const request = axios.post(`${USER_SERVER}/register`, dataTosubmit)
        .then(response =>  response.data);

        return {
            type: REGISTER_USER,
            payload: request
        }
}


// export function loginUser(dataTosubmit) {

//     const request = axios.post(`${USER_SERVER}/login`, dataTosubmit)
//         .then(response =>  response.data);
//     REGISTER_USER
// } from './types';

export function loginUser(dataTosubmit) {

    const request = axios.post('/api/users/login', dataTosubmit)
        .then(response =>  response.data)

        return {
            type: LOGIN_USER,
            payload: request
        }
}

export function auth() {

    const request = axios.get(`${USER_SERVER}/auth`)
        .then(response =>  response.data);

        return {
            type: AUTH_USER,
            payload: request
        }
}


export function logoutUser(){

    const request = axios.get(`${USER_SERVER}/logout`)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}


export function addToCart(id){

    let body = {
        imagesId : id
    }

    const request = axios.post(`${USER_SERVER}/addToCart`, body)
    .then(response => response.data);

    return {
        type: ADD_TO_CART,
        payload: request
    }
}


export function getCartItems(cartItems, userCart) {

    const request = axios.get(`/api/images/images_by_id?id=${cartItems}&type=array`)
        .then(response => {
        // CartItem들에 해당하는 정보들을  
        // Product Collection에서 가져온후에 
        // Quantity 정보를 넣어 준다.
        userCart.forEach(cartItem => {
            response.data.forEach((itemDetail, index) => {
                if (cartItem.id === itemDetail._id) {
                    response.data[index].quantity = cartItem.quantity
                }
            })
        })
        return response.data;
    });

    return {
        type: GET_CART_ITEMS,
        payload: request
    }
}



export function removeCartItem(imageId){

    const request = axios.get(`${USER_SERVER}/removeFromCart?id=${imageId}&type=array`)
        .then(response => {
            response.data.cart.forEach(item => {
                response.data.imageInfo.forEach((product, index) => {
                    if(item.id === product._id) {
                        response.data.imageInfo[index].quantity = item.quantity
                    }
                })
            })
            return response.data;
        })

    return {
        type: REMOVE_CART_ITEM,
        payload: request
    }
}

