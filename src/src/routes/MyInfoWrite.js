import React, {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../../config";
import {MyInfoWriteTotal} from "../components/myInfo-write/myInfoWriteTotal";
import { Navigate } from "react-router";
import RecruitListWithApplies from "../components/recruit-view/RecruitList";

function MyInfoWrite(props) {
    const [isWrite, setWrite] = useState([]);

    useEffect(() => {
        BaseMyInfoWrite(setWrite, isWrite);
    }, [])

    return (
        <RecruitListWithApplies
            recruitPosts={isWrite}
            onClickItem = {(item) =>{
                Navigate(`/detail/${item.recruitCarfullID}`);
            }}
        />
        // <>
        //     {
        //         isWrite.map((value,index)=>{
        //             return (<MyInfoWriteTotal
        //                 title={value["boardTitle"]}
        //                 fee={value["fee"]}
        //                 personLimit={value["personLimit"]}
        //                 startPoint={value["startPoint"]}
        //                 endPoint={value["endPoint"]}
        //                 comment={value["comment"]}
        //             />)
        //         })
        //     }
        // </>
    )
}

export {MyInfoWrite}

const BaseMyInfoWrite = (setWrite, isWrite) => {
    const access_token = localStorage.getItem("access_token");
    axios({
        url: `${API.INFO_WRT}`,
        method: 'get',
        headers: {
            Authorization: "Bearer " + access_token,
        }
    }).then((res) => {
        let copy = [...res.data];
        setWrite(copy);
    }).catch(err => console.log(err));
}