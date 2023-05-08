import React from 'react';
import st from "./myInfo.module.css"

function MyInfoItem(props){
    const {email, nick, userId} = props;

    return(
        <>
            <div className={st.MyInfo}>
                <div className={st.Email}>{email}</div>
                <div className={st.userId}>{userId}</div>
                <div className={st.nick}>{nick} : 닉 변경하기</div>
            </div>
        </>
    )

}

export {MyInfoItem}