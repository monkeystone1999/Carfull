import React, {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../../config";
import {MyInfoWriteTotal} from "../components/myInfo-write/myInfoWriteTotal";

function MyInfoWrite(props){
    const [isWrite, setWrite] = useState([]);

    // useEffect(()=>{
    //
    // },[])

    return (
        <>
            <MyInfoWriteTotal/>
        </>
    )
}

export {MyInfoWrite}

const BaseMyInfoWrite = (setWrite)=>{
    const access_token = localStorage.getItem("access_token");
    axios({
        url:`${API.INFO_WRT}`,
        method:'get',
        headers: {
            Authorization: "Bearer " + access_token,
        }
    }).then((res)=>{
        setWrite()
    }).catch(err=>console.log(err));
}