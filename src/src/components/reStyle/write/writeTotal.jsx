import React from "react";
import st from "../style.module.css"
import {InputBox} from "../input";
import {WriteSubmit} from "./writeSubmit";
import {WriteTextArea} from "./writeTextArea";

function  WriteTotal(props){
    const{
        titleOnChange,
        priceOnChange,
        limitOnChange,
        startOnChange,
        endOnChange,
        areaOnChange,
        onClick
    } = props
    return(
        <>
            <div className={`${st.WriteBigBox}`}>
                <InputBox label={"제목"} onChange={titleOnChange}/>
                <InputBox label={"가격"} onChange={priceOnChange}/>
                <InputBox label={"최대 인원수 제한"} onChange={limitOnChange}/>
                <InputBox label={"출발지"} onChange={startOnChange}/>
                <InputBox label={"도착지"} onChange={endOnChange}/>
                <WriteTextArea label={"글"} onChange={areaOnChange}/>
                <WriteSubmit onClick={onClick}/>
            </div>
        </>
    )
}

export {WriteTotal}