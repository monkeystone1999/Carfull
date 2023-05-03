import React, {useState} from "react";
import st from "../style.module.css"


function SignSubmit(props) {
    const [isAgree, setAgree] = useState(false);

    const {onClick, checkBoxOnChange} = props;
    return (
        <>
            <div className={`${st.SubmitBox}`}>
                <div className={`${st.signCheckBox}`}>
                    <input type={"checkbox"} id={"checkBox_onClick"} value={isAgree}
                    onChange={checkBoxOnChange}
                    />
                    <label htmlFor={"checkBox_onClick"} className={"checkbox_label"} onClick={()=>{
                        isAgree == true ? setAgree(false) : setAgree(true);
                    }}>동의</label>
                    <div className={"practice onClick"}></div>
                </div>
                <div className={`${st.SubmitButton}`}>
                    <button type={"submit"} onClick={onClick}>제출</button>
                </div>
            </div>
        </>
    )
}

export {SignSubmit}
