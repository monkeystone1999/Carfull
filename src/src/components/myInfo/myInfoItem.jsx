import React from 'react';
import st from "./myInfo.module.css"

function MyInfoItem(props){
    const {email, nick, userId} = props;

    return(
        <>
            <div className={st.MyInfo}>
                <div className={st.Email}>Email : {email}</div>
                <div className={st.userId}>아이디 : {userId}</div>
                <div className={st.nick}>닉네임 : {nick}</div>
            </div>
        </>
    )

}

export {MyInfoItem}