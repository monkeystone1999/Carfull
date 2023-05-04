import React from 'react';
import stl from './SignForm.module.css';

function SignRadioInput(props) {
    const { onChange } = props;

    return (
        <div className={stl.signRadioWrapper}>
            <input type="radio" className={stl.signRadioInput} name={'gender'} value={"man"} id={"man"} onChange={onChange}/>
            <label htmlFor="man" className={stl.signRadioLabel}>남자</label>
            <input type="radio" className={stl.signRadioInput} name={'gender'} value={"woman"} id={"woman"} onChange={onChange}/>
            <label htmlFor="woman" className={stl.signRadioLabel}>여자</label>
        </div>
    );
    
}

export default SignRadioInput;