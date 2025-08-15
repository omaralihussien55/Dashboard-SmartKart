import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  items: string[];
  lang:boolean,
   page:number,
   pageSize:number,
   category:string,
};

const initialState: CartState = {
  items: [],
  lang:false,
   page:1,
   pageSize:10,
   category:"all"
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
    changeCategory(state,action:PayloadAction<string>){
       state.category = action.payload
    },
  },
});

export const { addItem, removeItem ,changeLang,ChangeValuePageProduct,changeCategory} = CounterSlice.actions;
export default CounterSlice.reducer;
