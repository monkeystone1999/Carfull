/* eslint-disable*/
import './App.css';
import {Routes, Route, Link, Outlet, useNavigate, redirect} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Login from "./login/App"
import {AuthContext} from "./Auth";
import Main from "./main_route/Main";
import Sign from "./sign/App";
import Insider from "./insider";
import Write from "./write/App";
import axios from "axios";
import {delToken, reToken} from "./export/access";
import {getCookie, setCookie} from "./export/refresh";
import {Recruit} from "./recruit/App";
import {RecDetail} from "./recruit/recdetail";
import {useDispatch} from "react-redux";
import {setBoard} from "./reducer/store";
import {API} from "./config";
// const [isAccess, setAccess] = useState(
//     localStorage.getItem("access_token") || ""
// );
function App() {
    axios.defaults.withCredentials = true;
    const [isUser, setUser] = useState(false);
    const [Reducer, setReducer] = useState(false);
    const dispatch = useDispatch();
    const [isRefresh, setRefresh] = useState(
        getCookie('refresh_token')
    )
    const Token_To = 900000;
    const [Ti_Token, setTi_Token] = useState(0);
    let To_Token = Ti_Token + Token_To;
    const axiosBaseInfo = () =>{
        axios({
            url: `${API.RECRUIT}`,
            method : 'get',
        }).then(res => {
            dispatch(setBoard(res.data))
    }).catch(err=>console.log(err))
}
const handleLogout = () => {
        delToken("access_token");
        setCookie("refresh_token");
        setUser(false);
        return redirect("/");
    };
    useEffect(()=>{
        axiosBaseInfo()
    }, [Reducer])
    useEffect(()=>{
        if (getCookie("refresh_token") !== ""){
            setUser(true);
            // setTi_Token(new Date().getTime());
            // if(Ti_Token+ 900000 >= To_Token ){
            //     reToken("access_token");
            // }
        }
    },[isUser])
    //token time cookie time login 유무 이 3가지만 내려보내자
    // user 가 true 냐에 따라서 같은 url 이라도 바뀌어야함
    // user true 에 관련된 것중 뭐가 context 여야할까?
    // 만약 어떤 행동이 되어서 다시 redux 를 갱신해야한다면?
    return (
        <AuthContext.Provider value={{isUser, setUser, setReducer}}>
            <Nav_bar handleLogout={handleLogout}></Nav_bar>
            <Routes>
                <Route path={"*"} element={()=>{redirect("/")}}></Route>
                <Route path={"/"} element={<Main></Main>}></Route>
                <Route path={"/login"} element={<Login></Login>}></Route>
                <Route path={"/sign"} element={<Sign></Sign>}></Route>
                <Route path={"/recruit"} element={<Recruit></Recruit>}></Route>
                <Route path={"/detail/:detail"} element={<RecDetail></RecDetail>}></Route>
                <Route element={<Insider user={isUser}/>}>
                    <Route path="/write" element={<Write/>}/>
                    <Route path={""} element={""}/>
                </Route>
            </Routes>
        </AuthContext.Provider>
    )
}
// function StarUrl(){
//     const navigate = useNavigate();
//     useEffect(()=>{
//         navigate('/')
//     },[])
// }

function Nav_bar({handleLogout}) {
    const {isUser} = useContext(AuthContext);
    // const {authTokens} = useAuth();

    return (
        <>
            <nav className={"nav_flex"}>
                <div className={"left_side"}>
                    <div className={"flex"}>
                        <Link to={"/"}><div className={"Logo"}>Logo</div></Link>
                        {isUser ? (
                            <Link onClick={handleLogout}> Logout </Link>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                        {isUser ? (
                            <Link to={"/write"}>Write</Link>
                        ) : (
                            <Link to={"/sign"}>
                                <div className={"sign_up"}>Sign Up</div>
                            </Link>
                        )}
                    </div>
                </div>
                <div className={"right_side"}>
                    <div className={"flex"}>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"></input>
                        </form>
                        <Link to={"/recruit"}><div itemType={"button"}>just Look Around</div></Link>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    )
}


export default App;
