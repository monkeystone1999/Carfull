import React from "react";
import {Navbar} from "./Presentation/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";


/** Router 들 **/

import {Login} from "./routes/Login";
import {Recruit} from "./routes/Recruit";
import {Detail} from "./routes/Detail";
import {Sign} from "./routes/Sign";
import {Write} from "./routes/Write";
import {MyInfo} from "./routes/MyInfo";
import {Home} from "./routes/Home";
import {MyInfoChangePW} from "./routes/MyInfoChangePW";
import {MyInfoApply} from "./routes/MyInfoApply";
import {MyInfoWrite} from "./routes/MyInfoWrite";
import {MyChat} from "./routes/MyChat";
import {IsLogin} from "./isLogin";


function Main() {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path={"/"} element={<Home></Home>}></Route>
                <Route path={"/login"} element={<Login></Login>}></Route>
                <Route path={"/sign"} element={<Sign></Sign>}></Route>
                <Route path={"/recruit"} element={<Recruit></Recruit>}></Route>
                <Route path={"/detail/:detail"} element={<Detail></Detail>}></Route>
                <Route element={<IsLogin/>}>
                    <Route path={"/write"} element={<Write></Write>}></Route>
                    <Route path={"/MyInfo"} element={<MyInfo></MyInfo>}></Route>
                    <Route path={"/MyInfo/change_pw"} element={<MyInfoChangePW></MyInfoChangePW>}></Route>
                    <Route path={"/MyInfo/apply"} element={<MyInfoApply/>}/>
                    <Route path={"/MyInfo/recruit"} element={<MyInfoWrite/>}/>
                    <Route path={"/MyChat"} element={<MyChat/>}/>
                </Route>
                {/*restart*/}
            </Routes>
        </>
    )
}


export {Main}