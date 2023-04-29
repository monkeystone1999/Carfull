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
            <nav>
                <div className={"first_nav"}>
                    {
                        Login ? (<>
                                <Link onClick={setLogOut} to={"/"}>Logout</Link>
                            <Link to={"/MyInfo"}></Link>
                            </>)
                            : (<>
                            <Link to={"/login"}>Login</Link>
                            </>)
                    }
                    <Link to={"/sign"}>Sign Up</Link>
                </div>
                <div className={"main_nav"}>
                    <Link to={"/"}>Logo</Link>
                    <Link to={"/write"}>Logo</Link>
                    <Link to={"/recruit"}>
                        둘러보기
                    </Link>
                </div>
            </nav>
        </>
    )
}