import React, {useEffect, useState} from "react";
import st from "../style.module.css";


function SignRadio(props) {
    const [isMan, setMan] = useState(false);
    const [isWom, setWom] = useState(false);
    const {genderOnChange} = props
    return (
        <>
            <div className={st.wrapper2}>
                <div>성별 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div className={`${st.signCheckBox}`}>
                        <input type={"checkbox"} id={"checkBox_Man"} onClick={()=>{
                            isMan == true ? setMan(false) : setMan(true);
                            setWom(false);
                        }} disabled={isWom} name={'gender'} value={'man'} onChange={genderOnChange}/>
                        <label htmlFor={"checkBox_Man"} className={"checkbox_label"}>남자</label>
                        <div className={"practice Man"}></div>
                </div>
                <div className={`${st.signCheckBox}`}>
                        <input type={"checkbox"} id={"checkBox_Woman"} onClick={()=>{
                            isWom == true ? setWom(false) : setWom(true);
                            setMan(false);
                        }} disabled={isMan} name={'gender'} value={'woman'} onChange={genderOnChange}/>
                        <label htmlFor={"checkBox_Woman"} className={"checkbox_label"}>여자</label>
                        <div className={"practice Woman"}></div>
                </div>
            </div>
        </>
    )
}

export {SignRadio}


// //
// <input type="radio" className={`${st.radioStyle}`} name={'gender'} value={"man"} id={"man"} onChange={genderOnChange}/>
// <label htmlFor="man">남자</label>
// <input type="radio" className={`${st.radioStyle}`} name={'gender'} value={"woman"} id={"woman"} onChange={genderOnChange}/>
// <label htmlFor="woman">여자</label>