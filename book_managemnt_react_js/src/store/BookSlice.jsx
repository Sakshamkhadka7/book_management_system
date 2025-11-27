import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const bookSlice=createSlice({
    name:"book",
    initialState:{
        bookItems:[],
    },

    reducers:{
        setBook:(state,action)=>{
            state.bookItems.push(action.payload);
        }
    }
})

export const {setBook} =bookSlice.actions;
export default bookSlice.reducer;