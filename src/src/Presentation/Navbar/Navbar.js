import {useAuthDispatch, useAuthState} from "../../../AuthContext";
import {Link} from "react-router-dom";
import logo from '../../../logo.png';
import stl from './Navbar.module.css';
import {Nav_Link} from "./NavLink";
export function Navbar() {
    const Login = useAuthState();
    const setLogin = useAuthDispatch();

    const setLogOut = () => {
        setLogin(false);
    }
    return (
        <>
            <div className={stl.topNav}>
                <div>
                    URL List : carfull , etc...
                </div>
            </div>
            <nav className={stl.empty}>
                <div className={stl.navWrapper}>
                    <ul className={stl.navList}>
                        <li>
                            {
                                Login ? <Link onClick={setLogOut} to={"/"} className={stl.anchor}>Logout</Link>
                                    : <Link to={"/login"} className={stl.anchor}>Login</Link>
                            }
                        </li>

                        <Link to={"/sign"} className={stl.anchor}>Sign Up</Link>
                        <li class기Name={stl.logoWrapper}>
                            <Link to={"/"}><img src={logo} alt='' className={stl.logoImg}/></Link>
                        </li>
                        <li>
                            <Link to={"/MyInfo"} className={stl.anchor}>마이페이지</Link>

                        </li>
                    </ul>
                </div>
            </nav>
            <div className={stl.subNav}>
                <div className={stl.subContent}>
                    <Link to={"/recruit"} className={stl.anchor}>
                        둘러보기
                    </Link>
                    <Link to={"/write"} className={stl.anchor}>글쓰기</Link>
                </div>
            </div>
            <div>
                <Nav_Link ></Nav_Link>
            </div>
        </>
    )
}