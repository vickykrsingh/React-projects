import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total:0,
    products:[]
  },
  reducers: {
    cartMethod : (state, action) => {
      switch (action.payload.type) {
        case "add":
          if (state.products.find((pro) => pro.id == action.payload.product.id)) {
            state.products.filter((p, i) => {
              if (p.id == action.payload.product.id) {
                p.quantity += 1;
              }
              return p;
            })
            return state;
          } else {
            return {...state, products:[...state.products, {...action.payload.product, quantity: 1} ]};
          }
        case "remove":
          return state.products.filter((p) => p.id != action.payload.product.id);
        case "reset":
          return [];
        case "total":
          const tot = state.products.reduce((acc,p)=>{
            for(let i = 0;i<p.quantity;i++){
              acc+=p.price;
            }
            return acc;
          },0)
          state.total  = tot;
          return state;
        default:
          return state;
      }
    },
  },
});

export const { cartMethod } = cartSlice.actions;
export default cartSlice.reducer;
