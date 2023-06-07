import stl from "./Header.module.css"
import {Navbar} from "../../../Presentation/Navbar/Navbar";
import {Link} from "react-router-dom";
import React from "react";

function MyInfoHeader(props) {
    const {email, nick, userId} = props
    return (
        <>
            <div className={stl.Container}>
                <div className={stl.Row}>
                    <div className={stl.Ticket}>
                        <div className={stl.UserTicket}>
                            <div> 준비된 여정이 없습니다</div>
                        </div>
                    </div>
                    <div className={stl.User}>
                        <svg width="128" height="228" viewBox="0 0 128 228" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M64 100C91.6142 100 114 77.6142 114 50C114 22.3858 91.6142 0 64 0C36.3858 0 14 22.3858 14 50C14 77.6142 36.3858 100 64 100ZM64 95C88.8528 95 109 74.8528 109 50C109 25.1472 88.8528 5 64 5C39.1472 5 19 25.1472 19 50C19 74.8528 39.1472 95 64 95Z"
                                  fill="#D9D9D9"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M20 100C8.9543 100 0 108.954 0 120V228H128V120C128 108.954 119.046 100 108 100H20ZM25 105C13.9543 105 5 113.954 5 125V223H123V125C123 113.954 114.046 105 103 105H25Z"
                                  fill="#D9D9D9"/>
                        </svg>
                        {/*<div className={stl.UserId}>Id : {userId}</div> id 는 지우자*/}

                        <div className={stl.UserNick}>닉네임 : {nick}</div>
                        <div className={stl.Email}> E-mail : {email}</div>
                        <div className={stl.Buttons}>
                            <button>
                                <Link to={"/MyInfo/change_pw"}>비밀번호 변경하기</Link>
                            </button>
                            <button>
                                내 기록 보기
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export {MyInfoHeader}