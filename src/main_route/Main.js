import React from 'react';
import axios from 'axios';
import style from "./style.module.css"
axios.defaults.withCredentials = true;
/* eslint-disable*/
function App() {
    return (
        <>
            <F1></F1>
            <F2></F2>
            <F3></F3>
        </>
    );
}

function F1(){
    return(
        <>
            <div className={`${style.page}`}>
                <div className={`${style.F1}`}></div>
            </div>
        </>
    )
}
function F2(){
    return(
        <>
            <div className={`${style.page}`}>
                <div className={`${style.F2}`}></div>
            </div>
        </>
    )
}
function F3(){
    return(
        <>
            <div className={`${style.page}`}>
                <div className={`${style.F3}`}></div>
            </div>
        </>
    )
}

export default App;