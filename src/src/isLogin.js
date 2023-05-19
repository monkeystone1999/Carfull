
import React from "react";
import { useAuthState} from "../AuthContext";
import {Navigate, Outlet, redirect} from "react-router-dom";


function IsLogin(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isLogin = useAuthState();
    const msg = ()=>{
        alert("로그인 후 이용해주세요");
        return (
            <Navigate to={'/'}/>
        )
    }
    return (
        <>{
            isLogin == true ?
                <Outlet/>
                : (msg())
        }
        </>
    )
}

export {IsLogin}

//1. Connect Disconnect 없애고 자동으로 연결 시도할 수 있게끔 해주기
// 2. 접속 성공하면 /recruit/init/{recruitID} 에서 이전기록 채팅 받아오는지 테스트
// 3. 받아지면 화면에 렌더링 시킨 후에 사용자가 메시지 입력할 수 있도록 input 태그 활성화 시키기