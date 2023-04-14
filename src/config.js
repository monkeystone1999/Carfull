// const BASE_URL = "http://anu330.iptime.org:8080"

export const API = {
    // LOGIN : `${BASE_URL}/withcar/login-process`,
    // SIGN : `${BASE_URL}/withcar/signup`,
    LOGIN : `/withcar/login-process`,
    SIGN : `/withcar/signup`,
    BASEURL : `/withcar/`,
    WRITE : '/withcar/recruit/new',
    RECRUIT : '/withcar/recruit',
    RECRU_DEL : '/withcar/recruit/delete',
    RECRU_APL : '/withcar/recruit/apply',
    RECRU_OWN : '/withcar/recruit/isowner',
}

//import { createSlice } from '@reduxjs/toolkit'
//
// const initialState = {
//   value: 0,
// }
//
// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })
//
// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
//
// export default counterSlice.reducer