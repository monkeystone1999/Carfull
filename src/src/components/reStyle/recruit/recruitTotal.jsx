import React from "react";
import st from "../style.module.css"
import {RecruitList} from "./recruitList";

function RecruitTotal(props){
    const {recruitLists, onClickItem} = props
    return(
        <div className={`${st.recruitBigBox}`}>
            {recruitLists.map((recruitList, index) =>{
                console.log(recruitList);
                return (
                    <RecruitList
                        recruitList={recruitList}
                        onClick={()=>{
                            onClickItem(recruitList)
                        }}
                    />
                )
            })}
        </div>
    )
}

export {RecruitTotal}