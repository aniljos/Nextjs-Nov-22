import { CartItem } from "@/model/CartItem"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type GadgetState = {
    cart: CartItem[]
}

export type GadgetAction = {
    type: string, 
    payload?: CartItem
}

const initialState: GadgetState = {
    cart : []
}

// {type: "addItemToCart", payload: CartItem}
// {type: "removeItemFromCart", id: 10}
// {type: "clearCart"}
// export const gadgetsReducer = (state= initialState, action: GadgetAction) => {

//     if(action.type === "addItemToCart" && action.payload){

//         //state.cart.push(action.payload);
//         const cart = [...state.cart];
//         cart.push(action.payload);
//         return {
//             cart
//         };

//     }
//     return state;
// }


const gadgetsSlice = createSlice({
    name: 'gadgets',
    initialState: initialState,
    reducers: {
        addItemToCart: (state: GadgetState, action: PayloadAction<CartItem>) => {

            //treat state as mutable
            state.cart.push(action.payload);
        },
        removeItemFromCart: (state: GadgetState, action: PayloadAction<number>) => {
            
            const index = state.cart.findIndex(item => item.product.id == action.payload);
            state.cart.splice(index, 1);
        }
    }
})

export const gadgetsReducer =  gadgetsSlice.reducer;
//Action creators
export const {addItemToCart, removeItemFromCart} = gadgetsSlice.actions; 