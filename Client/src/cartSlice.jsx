import { createSlice } from "@reduxjs/toolkit";
import {message} from "antd"
import '@ant-design/v5-patch-for-react-19';

const cartSlice = createSlice({
    name:"mycart",

    initialState:{
        cart:[]
    },

    reducers:{
        addtocart:(state,actions) =>{
            const cartdata = state.cart.filter(key=>key.id == actions.payload.id)
            if(cartdata.length >= 1)
            {
                message.error("product already added")
            }
            else
            {
                state.cart.push(actions.payload)
            }
        },
        quntyincrese:(state,actions) =>{
            for(var i = 0; i<state.cart.length; i++)
            {
                if(state.cart[i].id == actions.payload.id)
                {
                    state.cart[i].qunty++
                }
            }
        },
        quntydecrese:(state,actions)=>{
            for(var i = 0; i<state.cart.length; i++)
            {
                if(state.cart[i].id == actions.payload.id)
                {
                   if(state.cart[i].qunty <=1)
                   {
                    message.error("qunty not less then 1")
                   }
                   else
                   {
                    state.cart[i].qunty--
                   }
                }
            }
        },
        productremove:(state,actions) =>{
            state.cart=state.cart.filter(key=>key.id!=actions.payload.id)
        },

        cartEmpty:(state)=>{
            state.cart=[];
        }
    }
})


export const {addtocart,quntyincrese,quntydecrese,productremove,cartEmpty} = cartSlice.actions
export default cartSlice.reducer