import {useAuthDispatch, useAuthState} from "../../AuthContext";
import {Link} from "react-router-dom";

export function Navbar(){
    const Login = useAuthState();
    const setLogin = useAuthDispatch();

    const setLogOut = ()=>{
        setLogin(false);
    }
    return(
        <>
            <nav className={"empty"}>
                <div className={"first_nav"}>
                    {
                        Login ? <Link onClick={setLogOut} to={"/"} className={"anchor"}>Logout</Link>
                            : <Link to={"/login"} className={"anchor"}>Login</Link>
                    }
                    {
                        Login ?
                            <Link to={"/MyInfo"} className={"anchor"}>마이페이지</Link>
                            : null
                    }
                    <Link to={"/sign"} className={"anchor"}>Sign Up</Link>
                </div>
                <div className={"main_nav"}>
                    <Link to={"/"} className={"anchor"}>Logo</Link>
                    <Link to={"/write"} className={"anchor"}>글쓰기</Link>
                    <Link to={"/recruit"} className={"anchor"}>
                        둘러보기
                    </Link>
                </div>
            </nav>
        </>
    )
}