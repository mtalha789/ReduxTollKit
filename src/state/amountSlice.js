import { createSlice } from "@reduxjs/toolkit";

const initialState = { value:15 }

const creditSlice = createSlice({
    name: 'credit',
    initialState,
    reducers: {
        add:(state,action)=>{
            state.value = state.value+action.payload
        },
        subtract:(state,action)=>{
            state.value = state.value-action.payload
        }
    }
})

export const { add , subtract } = creditSlice.actions
export default creditSlice.reducer