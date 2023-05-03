import React from "react";
import {useAuthState} from "../../../../AuthContext";
import {DetailList} from "./detailList";

function DetailTotal(props){
    const isLogin = useAuthState();
    const{Mine, Detail} = props
    return(
        <>
            <DetailList
                boardTitle={Detail.boardTitle}
                comment={Detail.comment}
                WriteTime={Detail.recruitWriteTime}
                nick={Detail.writeMember}
                personLimit={Detail.personLimit}
                fee={Detail.fee}
                startTime={Detail.startTime}
                startPoint={Detail.startPoint}
                endPoint={Detail.endPoint}
            />
            {isLogin ? Mine() : null}
        </>
    )
}

export {DetailTotal}