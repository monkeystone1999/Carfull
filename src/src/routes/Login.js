import {useAuthDispatch, useAuthState} from "../../AuthContext";
import {redirect, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Login(){
    const formData = new FormData();
    const isLogin = useAuthState();
    const setLogin = useAuthDispatch();
    const navigate = useNavigate();
    const [isID, setID] = useState("");
    const [isPW, setPW] = useState("");
    formData.append('userId', isID);
    formData.append('pw', isPW);
    
    useEffect(()=>{
        if(isLogin){
            return navigate('/');
        }
    },[isLogin]);

    return (
        <LoginForm
            idOnChange = {(event) => {
                setID(event.target.value);
            }}
            pwOnChange = {(event) => {
                setPW(event.target.value);
            }}
            onClick = { 
                LoginSubmit(formData, setLogin)
            }
        />
    );
}

function LoginSubmit(formData, setLogin){
    axios({
        // 이 부분이 config 부분
        url: `/withcar/login-process`,
        method: "post",
        data: formData,
        //     요까지
    })
        .then((data) => {
            const get_data = data.data.token;
            localStorage.setItem('access_token', get_data['access_token'])
            sessionStorage.setItem('refresh_token', get_data['refresh_token'])
            setLogin(true);
            redirect('/');
        })
        .catch((e) => {
            console.log(e);
        });
}

export {Login}