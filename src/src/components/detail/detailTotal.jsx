import React from "react";
import {useAuthState} from "../../../AuthContext";
import {DetailList} from "./detailList";
import stl from "./detail.module.css";

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
                applyCount={Detail.applyPersonCount}
                fee={Detail.fee}
                startTime={Detail.startTime}
                startPoint={Detail.startPoint}
                endPoint={Detail.endPoint}
            />
            <div className={stl.Detail_submit}>{isLogin ? Mine() : null}</div>
        </>
    )
}

export {DetailTotal}