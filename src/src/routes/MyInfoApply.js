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
                    value.map(values =>{
                        return (
                            <MyInfoApplyTotal
                                title={values["boardTitle"]}
                                fee={values["fee"]}
                                personLimit={values["personLimit"]}
                                startPoint={values["startPoint"]}
                                endPoint={values["endPoint"]}
                                comment={values["comment"]}
                            />
                        )
                    })

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