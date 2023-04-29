import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {API} from "../../config";
import {callInfo, setInfo} from "../../reducer/store";


function MyInfo(){
    const dispatch = useDispatch();
    const Myinfo = useSelector(state => state.MyInfo);
    const access_token = localStorage.getItem("access_token");
    useEffect(()=>{
        BaseMyInfo(access_token, dispatch);
    },[])
    callInfo();
    return (
        <>
            {Myinfo.email}
            {Myinfo.nick}
            {Myinfo.phoneNumber}
            {Myinfo.userId}
        </>
    )
}

export {MyInfo}

const BaseMyInfo = (Auth,dispatch)=>{
    axios({
        url:`${API.INFO}`,
        method:'get',
        headers: {
            Authorization: "Bearer " + Auth,
        }
    }).then((res)=>{
        dispatch(setInfo(res.data))
    }).catch(err=>console.log(err));
}