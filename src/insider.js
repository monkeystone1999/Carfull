import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
/*eslint-disable*/
function Insider({isUser, redirectPath="/login"}){
    const navigate = useNavigate();
    useEffect(()=>{
        if(isUser){
            alert("잘못된 접속 방법입니다 로그인 후에 접근해주시길 바랍니다")
            navigate(redirectPath);
        //     만약 login 인데 login 으로 가면 자동으로 "/" 으로 간다
        }
    },[])
    return <Outlet/>;
}

export default Insider