import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../Auth";
import {Login_Submit} from "./Container";
import {Login_MainFunc} from "./Presentation";
/*eslint-disable*/
function Login() {
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);
    const [isId, setId] = useState("");
    const [password, setPassword] = useState("");
    const formData = new FormData();
    const {setUser, isUser} = useContext(AuthContext);
    // const referer = props.location.state ? props.location.state.referer : "/";
    // 위의 코드는 만약 Login 을 누르기 전의 사이트를 알아내는 코드로 이전의 방문한 사이트 없이 그냥 main 에서 login 을 누른경우 "/"으로 다시 보내는 로직
    formData.append('userId', isId);
    formData.append('pw', password);

    useEffect(()=>{
        if (isUser) {
            return navigate('/');
        }
    }, [isUser])
    return (
        <>
            <div>
                <Login_MainFunc setId={setId} setPassword={setPassword} ></Login_MainFunc>
                <button type="submit" onClick={()=>{Login_Submit(formData, setUser)}}>
                    Log In
                </button>
                {isError && <div>The username or password provider were incorrect.</div>}
            </div>
        </>
    );
}

export default Login;