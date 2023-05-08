import {useAuthDispatch, useAuthState} from "../../AuthContext";
import {Link} from "react-router-dom";
import logo from '../../logo.png';
import stl from './Navbar.module.css';

export function Navbar(){
    const Login = useAuthState();
    const setLogin = useAuthDispatch();

    const setLogOut = ()=>{
        setLogin(false);
    }
    return(
        <>
            <nav className={"empty"}>
                <div className={stl.navWrapper}>
                    <ul className={stl.navList}>
                        <li>
                            {
                                Login ? <Link onClick={setLogOut} to={"/"} className={stl.anchor}>Logout</Link>
                                    : <Link to={"/login"} className={stl.anchor}>Login</Link>
                            }
                        </li>
                        <li>
                            {
                                Login ?
                                <Link to={"/MyInfo"} className={stl.anchor}>마이페이지</Link>
                                : <Link to={"/sign"} className={stl.anchor}>Sign Up</Link>
                            }
                        </li>
                        <li className={stl.logoWrapper}>
                              <Link to={"/"} ><img src={logo} alt='' className={stl.logoImg}/></Link>
                        </li>
                        <li>
                            {
                                Login ?
                                <Link to={"/write"} className={stl.anchor}>글쓰기</Link>
                                : null
                            }
                             
                        </li>
                        <li>
                            <Link to={"/recruit"} className={stl.anchor}>
                            둘러보기
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}