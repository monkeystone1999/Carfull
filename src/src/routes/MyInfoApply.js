import React, {useEffect, useState} from "react";
import {MyInfoApplyTotal} from "../components/myInfo-apply/myInfoApplyTotal";
import axios from "axios";
import {API} from "../../config";


function MyInfoApply(props){
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
                            title={value["boardTitle"]}
                            fee={value["fee"]}
                            personLimit={value["personLimit"]}
                            startPoint={value["startPoint"]}
                            endPoint={value["endPoint"]}
                            comment={value["comment"]}
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
        url:`${API.INFO_WRT}`,
        method:'get',
        headers: {
            Authorization: "Bearer " + access_token,
        }
    }).then((res)=>{
        setApply(index =>{
            return [
                ...index, res.data
            ]
        })
    }).catch(err=>console.log(err));
}