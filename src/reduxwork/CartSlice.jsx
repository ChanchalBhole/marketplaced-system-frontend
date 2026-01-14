import { CardTravel } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";



let initialState = {
    cartItems: [],
    cartTotal: 0,
    itemCount: 0
}

let cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, actions) => {
            let newItem = { ...actions.payload, Qty: 1 }
            state.cartItems = [...state.cartItems, newItem]
            state.itemCount = state.cartItems.length
        },
        increQty: (state, actions) => {
            let prodItem = state.cartItems.find((itm) => itm.id == actions.payload.pId)
            prodItem.Qty += 1
        },
        decreQty: (state, actions) => {
            let prodItem = state.cartItems.find((itm) => itm.id == actions.payload.pId)
            prodItem.Qty -= 1
            if(prodItem.Oty==0){
                state.cartItems=state.cartItems.filter((item)=>item.id!==actions.payload.pId)
                state.itemCount=state.cartItems.length
                   }
        },
        calcilateTotal: (state) => {
            let total = 0
            for (const item of state.cartItems) {
                total += item.price * item.Qty
            }
            state.cartTotal = total
        },
        removeItem: (state, actions) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== actions.payload.pId)
            state.itemCount = state.cartItems.length
        }
    }
})

export const { addItem, removeItem, increQty, decreQty, calcilateTotal } = cartSlice.actions
export default cartSlice.reducer