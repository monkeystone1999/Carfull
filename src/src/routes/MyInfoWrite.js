import React, {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../../config";
import {MyInfoWriteTotal} from "../components/myInfo-write/myInfoWriteTotal";

function MyInfoWrite(props) {
    const [isWrite, setWrite] = useState([]);

    useEffect(() => {
        BaseMyInfoWrite(setWrite);
    }, [])
    return (
        <>
            {
                isWrite.map((value, index) => {
                    value.map((values)=>{
                        return (<MyInfoWriteTotal
                            title={values["boardTitle"]}
                            fee={values["fee"]}
                            personLimit={values["personLimit"]}
                            startPoint={values["startPoint"]}
                            endPoint={values["endPoint"]}
                            comment={values["comment"]}
                        />)
                    })
                })
            }
        </>
    )
}

export {MyInfoWrite}

const BaseMyInfoWrite = (setWrite) => {
    const access_token = localStorage.getItem("access_token");
    axios({
        url: `${API.INFO_WRT}`,
        method: 'get',
        headers: {
            Authorization: "Bearer " + access_token,
        }
    }).then((res) => {
        setWrite(index => {
            return [
                ...index, res.data
            ]
        })
    }).catch(err => console.log(err));
}