import {configureStore, createSlice} from '@reduxjs/toolkit'
// 내가 불러들인 목록을 저장하자

export const MotherBoard = createSlice({
    name : 'MotherBoard',
    initialState : [],
    reducers : {
        setBoard: (state, data) =>{
            state.push(data.payload);
        },
    }
})
export const {setBoard} = MotherBoard.actions
export const store = configureStore({
    reducer: {
        MB : MotherBoard.reducer,
    },
})

