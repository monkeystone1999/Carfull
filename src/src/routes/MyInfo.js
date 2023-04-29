import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {API} from "../../config";
import {setInfo} from "../../reducer/store";


function MyInfo(){
    const dispatch = useDispatch();
    const Myinfo = useSelector(state => state.MB.Info);
    const access_token = localStorage.getItem("access_token");
    useEffect(()=>{
        BaseMyInfo(access_token, dispatch(setInfo));
    },[])

    return (
        <>
            {Myinfo}
        </>
    )
}

export {MyInfo}

const BaseMyInfo = (Auth, setInfo)=>{
    axios({
        url:`${API.INFO}`,
        method:'get',
        headers: {
            Authorization: "Bearer " + Auth,
        }
    }).then((res)=>{
        setInfo(res.data);
    }).catch(err=>console.log(err));
}