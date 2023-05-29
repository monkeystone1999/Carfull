import {useAuthDispatch, useAuthState} from "../../AuthContext";
import {redirect, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {LoginTotal} from "../Coupling/Login/LoginTotal";
// import {LoginTotal} from "../components/login/loginTotal";


function Login(){
    const formData = new FormData();
    const isLogin = useAuthState();
    const setLogin = useAuthDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(isLogin){
            return navigate('/');
        }
    },[isLogin]);

    return (
        <>
            <LoginTotal
                formData={formData}
                onClick = {() => {
                    LoginSubmit(formData, setLogin);
                }}
            />
        </>
    )
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