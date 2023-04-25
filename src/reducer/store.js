import {configureStore, createSlice} from '@reduxjs/toolkit'
// 내가 불러들인 목록을 저장하자

export const MotherBoard = createSlice({
    name : 'MotherBoard',
    initialState : {board : [], Info : []},
    reducers : {
        setBoard: (state, data) =>{
            state.board.push(data.payload);
        },
        setInfo: (state, action)=>{
            state.Info.push(action.payload);
        }
    }
})
export const {setBoard, setInfo} = MotherBoard.actions
export const store = configureStore({
    reducer: {
        MB : MotherBoard.reducer,
    },
})
