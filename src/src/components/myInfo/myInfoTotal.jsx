import React from "react";
import st from "./myInfo.module.css"
import {MyInfoItem} from "./myInfoItem";
import {Link} from "react-router-dom";
import {API} from "../../../config";

//마이페이지
// email
// nick
// userId
// 내가 쓴 글 -> 들어온 신청
// 내가 신청한 글 -> 받아진 신청
// 리스트로 돌아옴
//
function MyInfoTotal(props) {
    const {email, nick, userId} = props
    return (
        <>
            <div className={st.BigBox}>
                <MyInfoItem
                    email={email}
                    nick={nick}
                    userId={userId}
                />
                <div className={st.Write}>
                    <Link to={`/MyInfo/recruit`}>write</Link>
                </div>
                <div className={st.Apply}>
                    <Link to={`/MyInfo/apply`}>apply</Link>
                </div>
                <div className={st.ChangePW}>
                    <Link to={"/MyInfo/change_pw"}>비밀번호 변경하기</Link>
                </div>
            </div>
        </>
    )
}

export {MyInfoTotal}