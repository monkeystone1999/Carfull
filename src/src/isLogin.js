
import React from "react";
import { useAuthState} from "../AuthContext";
import {Outlet, redirect} from "react-router-dom";


function IsLogin(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isLogin = useAuthState();
    return (
        <>{
            isLogin == true ? <Outlet/>: redirect("/")
        }
        </>
    )
}

export {IsLogin}