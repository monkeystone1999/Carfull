import React from 'react';
import st from '../style.module.css';

function WriteTextArea(props) {
    const {onChange, label} = props
    return (
        <>
            <div className={`${st.wrapper}`} style={{'height' : '200px'}}>
                <div className={`${st.commandBox}`}>
                <label>{label} </label>
                <textarea className={`${st.commandArea}`} onChange={onChange}></textarea>
            </div>
            </div>
        </>
    )
}
export {WriteTextArea}