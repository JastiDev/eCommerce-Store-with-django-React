import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'




export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload // payload is a product
            const existItem = state.cartItems.find(x => x.product === item.product) //checking whether the product is in cartItems
            // x.product is an id, not an object
            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x)
                }

            }
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems, item] // adds product(item) to a cart
                }
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
                // x.product is an id, action.payload is an id of the product to be removed
                // all products except the product to be removed stay in cartItems
            }

        default:
            return state
    }
}