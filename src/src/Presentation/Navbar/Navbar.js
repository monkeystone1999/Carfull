import {useAuthDispatch, useAuthState} from "../../../AuthContext";
import {Link, redirect} from "react-router-dom";
import stl from './Element/Navbar.module.css';

export function Navbar() {
    const Login = useAuthState();
    const setLogin = useAuthDispatch();
    const setLogOut = () => {
        setLogin(false);
        redirect("/");
    }
    return (
        <>
            <div className={stl.Container}>
            <nav className={stl.NavBar}>
                <div className={stl.BrandName}><Link to={"/"}>CarFull</Link></div>
                <div className={stl.RightSide}>
                    {
                        Login==true ?
                            <div className={stl.LogOut} onClick={()=>{setLogOut()}}>LogOut</div>
                            : <div className={stl.LoginLink}><Link to={"/login"}>Login</Link></div>
                    }

                    <div className={stl.SignUpLink}><Link to={"/sign"}>SignUp</Link></div>
                </div>
            </nav></div>
        </>
    )
}