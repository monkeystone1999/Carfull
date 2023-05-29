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
    const [isApplied, setApplied] = useState(false);
    const [isAccepted, setAccepted] = useState(false);
    const formData = new FormData();
    formData.append('recruit_ID', parseInt(detail));
    const access_token = localStorage.getItem("access_token");


    useEffect(()=>{
    getDetail(parseInt(detail), setDetail);
        if(access_token){
            checkIsMine(formData, access_token, setMine);
        }
        if(!isMine) {
            checkIsApplied(formData, setApplied);
            checkIsAccepted(formData, setAccepted);
        }
    },[])

    return (
        <>
            <DetailTotal
                Detail = {isDetail}
                isMine = {isMine}
                isApplied = {isApplied}
                isAccepted = {isAccepted}
                API = {API}
                formData = {formData}
            />
        </>
    )
}

export {Detail}

// carfullRecruitNotApplied = 내가 신청 안한거임 carfullRecruitApplyNotfound = 신청안했기에 그냥 같이 뜨는거임
/**처음 들어갈때 기본적인 정보를 요청**/
const getDetail = (detail, setDetail)=>{
    axios({
        url: `${API.RECRUIT}/${detail}`,
        method : 'get',
    }).then(res=>{
        setDetail(res.data);
    }).catch(err=>console.log(err));
}

/** 내가 썻던 글이 맞는가 아닌가 확인 **/
const checkIsMine = (formData, access_token, setMine)=>{
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

/** 신청한 카풀인지 확인 */
const checkIsApplied = (formData, setApplied) => {
    const access_token = localStorage.getItem("access_token");
    let url = API.CHK_RECRU_APL;

    axios({
        url: `${url}`,
        method : 'post',
        data : formData,
        headers:{
            Authorization: "Bearer " + access_token,
        }
    }).then(res => {
        if(res.data == true) {
            // 신청했으면 true
            // 신청안했으면 carfullRecruitNotApplied
            setApplied(true);
        }
    })
}

/** 승낙된 카풀인지 확인 */ 
const checkIsAccepted = (formData, setAccepted) => {
    
    const access_token = localStorage.getItem("access_token");
    let url = API.CHK_RECRU_ACC;

    axios({
        url: `${url}`,
        method : 'post',
        data : formData,
        headers:{
            Authorization: "Bearer " + access_token,
        }
    }).then(res => {
        if(res.data == true) {
            // 승낙했으면 true
            // 승낙안했으면 false
            setAccepted(true);
        }
    })
}