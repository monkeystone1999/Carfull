import React, {useEffect, useState} from "react";
// import {MyInfoApplyTotal} from "../components/myInfo-apply/myInfoApplyTotal";
import axios from "axios";
import {API} from "../../config";
import {MyInfoApplyTotal} from "../Coupling/MyInfoApply/MyInfoApplyTotal";


function MyInfoApply(props){
    const {nick} = props
    const [isApply, setApply] = useState([]);

    useEffect(()=>{
        BaseMyInfoApply(setApply)
    },[])
    return (
        <>
            {
                isApply.map((value, index) => {
                        return (
                            <MyInfoApplyTotal
                                recruitPost={value}
                                nick={nick}
                            />
                        )
                })
            }

        </>
    )
}

export {MyInfoApply}
// 일단 리스트로 온다

const BaseMyInfoApply = (setApply)=>{
    const access_token = localStorage.getItem("access_token");
    axios({
        url:`${API.INFO_APL}`,
        method:'get',
        headers: {
            Authorization: "Bearer " + access_token,
        }
    }).then((res)=>{
        let copy = [...res.data];
        setApply(copy);
    }).catch(err=>console.log(err));
}