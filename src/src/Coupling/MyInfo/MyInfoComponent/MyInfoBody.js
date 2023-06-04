import stl from "./Body.module.css"
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {Recruit} from "../../../routes/Recruit";
import {MyInfoApply} from "../../../routes/MyInfoApply";
import {Write} from "../../../routes/Write";


function MyInfoBody() {
    const content = [{
        title : "작성 내역", des : <Recruit/>},{
        title : "신청 내역", des : <MyInfoApply/>},{
        title : "모집 하기", des : <Write/>}
    ]

    const [isTab, setTab] = useState(Number);
    return (
        <>
            <div className={stl.Container}></div>
            {
                content.map((value, index) =>{
                    return <button onClick={()=>{setTab(index)}}>{value.title}</button>
                })
            }
            {content[isTab].des}
        </>
    )
}

export {MyInfoBody}

