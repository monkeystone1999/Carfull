import React from 'react';
import st from './style.module.css';

function InputBox(props) {
    const {label, onChange} = props;
    return (
        <>
            <div className={st.wrapper_input}>
                <div className={st.input_data}>
                    <input type="text" className={st._input} onChange={onChange} required></input>
                    <div className={st.underline}></div>
                    <label className={st._input_lb}>{label}</label>
                </div>
            </div>
        </>
    )
}
export {InputBox}