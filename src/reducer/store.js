import {configureStore, createSlice, current} from '@reduxjs/toolkit'
// 내가 불러들인 목록을 저장하자

export const MotherBoard = createSlice({
    name : 'MotherBoard',
    initialState : Array,
    reducers : {
        setBoard: (state, data) =>{

            return data.payload;
        },
        callBoard: (state)=>{
            console.log(current(state));
        }
    }
})

export const MyInfo = createSlice({
    name:'MyInfo',
    initialState : Object,
    reducers :{
        setInfo:(state,action)=>{
            return action.payload
        },
        callInfo:(state)=>{
            console.log(current(state));
        }
    }
})
export const {setBoard, callBoard} = MotherBoard.actions
export const {setInfo, callInfo} = MyInfo.actions
export const store = configureStore({
    reducer: {
        MB : MotherBoard.reducer,
        MyInfo : MyInfo.reducer
    },
})
