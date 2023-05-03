import React from 'react';
import st from '../style.module.css';

function SignTextArea(props) {
    const {description} = props
    return (
        <>
            <div className={`${st.areaBox}`}>
                <label>약관 : </label>
                <textarea className={`${st.TextBox} ${st.heavyText}`} disabled>{description}</textarea>
            </div>
        </>
    )
}
export {SignTextArea}