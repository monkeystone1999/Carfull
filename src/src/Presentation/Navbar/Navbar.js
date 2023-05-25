import {useAuthDispatch, useAuthState} from "../../../AuthContext";
import {Link} from "react-router-dom";
import logo from '../../../logo.png';
import stl from './Navbar.module.css';
import {Nav_Link} from "./NavLink";
import {NavHeader} from "./NavHeader";

export function Navbar() {
    const Login = useAuthState();
    const setLogin = useAuthDispatch();
    let header_url = ["blahblah"];
    const LoginSub = ["로그인  ", "ログイン"];
    const SignSub = ["회원가입  ", "Kaiin tōroku"];
    const MyInfoSub = ["내가 쓴 글", " 신청한 글"];
    const WriteSub = Login==true ? ["글 작성하기!"] : ["로그인 후 이용해주세요"];
    const RecruitSub = ["마음껏 둘러보기!"];
    const setLogOut = () => {
        setLogin(false);
    }
    return (
        <>
            <NavHeader header_url={header_url}></NavHeader>
            <nav className={stl.NavBar}>
                <Link to={"/"}><img src={logo} alt='' className={stl.logoImg}/></Link>
                <div className={stl.FirstNav}>
                    <Nav_Link title={"Login"} subTitles={LoginSub} LinkTo={"/login"}></Nav_Link>
                    <Nav_Link title={"Sign up"} subTitles={SignSub} LinkTo={"/sign"}></Nav_Link>
                    <Nav_Link title={"마이페이지"} subTitles={MyInfoSub} LinkTo={"/MyInfo"}></Nav_Link>
                </div>
                <div className={stl.SecondNav}>
                    <Nav_Link title={"글쓰기"} subTitles={WriteSub} LinkTo={"/write"}></Nav_Link>
                    <Nav_Link title={"둘러보기"} subTitles={RecruitSub} LinkTo={"/recruit"}></Nav_Link>
                </div>
            </nav>
        </>
    )
}