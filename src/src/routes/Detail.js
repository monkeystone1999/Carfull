import {useAuthState} from "../../AuthContext";
import {redirect, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../../config";
import {DetailTotal} from "../components/detail/detailTotal";

function Detail(){
    const isLogin = useAuthState();
    let {detail} = useParams();
    let [isDetail, setDetail] = useState(Array);
    const [isMine, setMine]= useState(false);
    const [isResult, setResult] = useState(false);
    const formData = new FormData();
    useEffect(()=>{
        const access_token = localStorage.getItem("access_token");
        formData.append('recruit_ID', parseInt(detail));
        baseDetail(detail, setDetail);
        if(access_token){
            isMineDetail(formData, access_token, setMine);
        }
    },[])
    useEffect(()=>{
        if(isResult){
            redirect("/");
        }
    },[isResult])
    const Mine = ()=>{
        /**내 것이 맞으면 삭제하기가 뜨고 아니면 신청하기가 떠야한다 **/
        if(isMine){
            return (<button onClick={()=>{
                DetailSubmit(isDetail.recruitCarfullID,false, setResult )
                
            }}>삭제하기!!</button> )
        }else{
            return (<button onClick={()=>{
                DetailSubmit(isDetail.recruitCarfullID,true, setResult )
            }}>신청하기!!</button> )
        }
    }
    return (
        <>
            <DetailTotal
                Mine = {Mine}
                Detail = {isDetail}
            />
        </>
    )
}

export {Detail}


/**처음 들어갈때 기본적인 정보를 요청**/
const baseDetail = (detail, setDetail)=>{
    axios({
        url: `${API.RECRUIT}/${detail}`,
        method : 'get',
    }).then(res=>{
        setDetail(res.data);
    }).catch(err=>console.log(err));
}

/** 내가 썻던 글이 맞는가 아닌가 확인하는 위젯 **/
const isMineDetail = (formData, access_token, setMine)=>{
    axios({
        url: `${API.RECRU_OWN}`,
        method: 'post',
        headers: {
            Authorization: "Bearer " + access_token,
        },
        data : formData
    }).then(res => {
        if(res.data == true){
            redirect('/');
            setMine(true);
        }
        else{
            setMine(false);
        }
    }).catch(err=>console.log(err))
}

/**제출 버튼**/
const DetailSubmit = (recruitCarfullID, type, setResult)=>{
    const access_token = localStorage.getItem("access_token");
    let url;
    /**type 이 true 면 apply 고 false 면 delete 이다  **/
    type ? url= API.RECRU_APL : url=API.RECRU_DEL;
    axios({
        url: `${url}/${recruitCarfullID}`,
        method : 'post',
        headers:{
            Authorization: "Bearer " + access_token,
        }
    }).then(res=> redirect('/'))
}
