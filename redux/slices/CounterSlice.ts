import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  items: string[];
  lang:boolean,
   page:number,
   pageSize:number
};

const initialState: CartState = {
  items: [],
  lang:false,
   page:1,
   pageSize:10
};


const CounterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item !== action.payload);
    },
    changeLang(state,action:PayloadAction<boolean>){
       state.lang = action.payload
    },
     ChangeValuePageProduct: (state,action: PayloadAction<{page:number}>) => {
        
                   const totalPages = action.payload.page;
       
                   state.page = totalPages
    },
  },
});

export const { addItem, removeItem ,changeLang,ChangeValuePageProduct} = CounterSlice.actions;
export default CounterSlice.reducer;
