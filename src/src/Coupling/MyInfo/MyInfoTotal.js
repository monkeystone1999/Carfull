import {MyInfoHeader} from "./MyInfoComponent/MyInfoHeader";
import stl from "./MyInfo.module.css";
import {Navbar} from "../../Presentation/Navbar/Navbar";
import {MyInfoBody} from "./MyInfoComponent/MyInfoBody";


function MyInfoTotal(props) {
    const {email, nick, userId} = props
    return (
        <>
            <Navbar/>
            <div className={stl.Container}>
                <MyInfoHeader email={email} nick={nick} userId={userId}/>
                <MyInfoBody nick={nick}/>
            </div>
        </>
    )
}

export {MyInfoTotal}