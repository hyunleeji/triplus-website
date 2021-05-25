import { 
    LOGIN_USER,
<<<<<<< HEAD
    REGISTER_USER, 
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM
=======
    REGISTER_USER 
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
                return {...state, loginSuccess: action.payload }
<<<<<<< HEAD
        case REGISTER_USER:    
                return {...state, register: action.payload }  
        case AUTH_USER:    
                return {...state, userData: action.payload } 
        case LOGOUT_USER:
                return {...state } 
        case ADD_TO_CART:
                return {...state, 
                        userData: {
                        ...state.userData,
                        cart: action.payload
                    } 
                } 
        case GET_CART_ITEMS:
                return {...state, cartDetail: action.payload }
        case REMOVE_CART_ITEM:
                return {...state, cartDetail: action.payload.imageInfo,
                        userData: {
                                ...state.userData,
                                cart: action.payload.cart
                        }
                }
=======
            break;
        case REGISTER_USER:    
                return {...state, register: action.payload }  
            break;
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
        default:
            return state;
    }
}