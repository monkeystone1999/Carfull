import stl from "./Body.module.css"

import React, {useState} from "react";
import {MyInfoApply} from "../../../routes/MyInfoApply";
import {Write} from "../../../routes/Write";
import {MyInfoWrite} from "../../../routes/MyInfoWrite";


function MyInfoBody() {
    const content = [{
        title: "작성 내역", des: <MyInfoWrite/>
    }, {
        title: "신청 내역", des: <MyInfoApply/>
    }, {
        title: "모집 하기", des: <Write/>
    }
    ]

    const [isTab, setTab] = useState(Number);
    const [Tab, onTab] = useState(false);
    return (
        <>
            <div className={stl.Container}>
                <div className={stl.Header}>
                {
                    content.map((value, index) => {
                        return <button onClick={() => {
                            if(isTab == index){
                                onTab(false);
                                setTab(Number);
                            }
                            else{
                                setTab(index);
                                onTab(true);
                            }

                        }}>{value.title}</button>
                    })
                }
                </div>
                <div className={stl.Body}>
                {
                    Tab == true ?
                        content[isTab].des
                        : null
                }
                </div>
            </div>
        </>
    )
}

export {MyInfoBody}

