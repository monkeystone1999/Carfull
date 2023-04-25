import {useDispatch, useSelector} from "react-redux";
import {setInfo} from "../reducer/store";
import {useEffect} from "react";
import {axiosMyInfo} from "./Container";
export const Myinfo = ()=>{
    const dispatch = useDispatch();
    const MyInfo = useSelector(state => state.MB.Info);
    const access_token = localStorage.getItem("access_token");
    useEffect(()=>{
        axiosMyInfo(access_token, dispatch(setInfo));
    },[]);
    const button = ()=>{
        console.log(MyInfo);
    }
    return(
        <>
            <button onClick={()=>{
                button()
            }}></button>
        </>
    )
}