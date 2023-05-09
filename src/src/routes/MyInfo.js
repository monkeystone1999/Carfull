import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../../config";
import {callInfo, setInfo} from "../../reducer/store";
import {Link} from "react-router-dom";
import {MyInfoTotal} from "../components/myInfo/myInfoTotal";

function MyInfo(){
    // const dispatch = useDispatch();
    // const Myinfo = useSelector(state => state.MyInfo);
    // 일단은 이렇게 하고 나중에 redux toolkit 으로 다시 감싸자
    const [Myinfo, setMyinfo] = useState({
        nick : '',
        userId : '',
        email : ''
    });
    const access_token = localStorage.getItem("access_token");
    useEffect(()=>{
        BaseMyInfo(access_token, setMyinfo);
    },[])
    // selector 사용하지 않고 해보자
    return (
        <>
            <MyInfoTotal
                email={Myinfo.email}
                nick={Myinfo.nick}
                userId={Myinfo.userId}
            />
            <Link to={"/MyChat"}>채팅하기</Link>
        </>
    )
}


export {MyInfo}

const BaseMyInfo = (Auth,setMyinfo)=>{
    axios({
        url:`${API.INFO}`,
        method:'get',
        headers: {
            Authorization: "Bearer " + Auth,
        }
    }).then((res)=>{

        // dispatch(setInfo(res.data))
        setMyinfo((Myinfo)=> {
            return {
            ...Myinfo,
                nick : res.data['nick'],
                userId: res.data['userId'],
                email : res.data['email']
        }})
    }).catch(err=>console.log(err));
}

//nick":"susk","role":"ROLE_USER","phoneNumber":"010-1234-4567","lastPwChangedDate":"2023-05-04","pw":"$2a$10$kZ75GfHajbtKzo00f/kP9OMvVtVknDWuBx0QyuuHHH/dphS3dHATy","signDate":"2023-05-04T01:58:20.069915","idNumber":1,"userId":"susk","email":"susk@gmail.com"}