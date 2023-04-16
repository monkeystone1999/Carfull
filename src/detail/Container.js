import {axiosRecruitApply, axiosRecruitDel, axiosRecruitDetail, axiosRecruitOwner} from "../export/axios_custom";
import axios from "axios";
import {API} from "../config";


export const Mine = ({isMine, isRecruit}) =>{
    if (!isMine) {
        return (<button onClick={() => {
            Submit(isRecruit.recruitCarfullID, 'apply')
        }}>신청하기!</button>)
    } else return (<button onClick={() => {
        Submit(isRecruit.recruitCarfullID, 'del')
    }}>Delete!</button>)
}
export const Submit = (recruitCarfullID, type) => {
    const access_token = localStorage.getItem("access_token");
    type == 'del' ?
        axiosRecruitDel(recruitCarfullID, access_token,setRecRes)
        : axiosRecruitApply(recruitCarfullID, access_token, setRecRes)
}

export const axiosRecruitDel = (recruitCarfullID, Auth, setResult) => {
    axios({
        url: `${API.RECRU_DEL}/${recruitCarfullID}`,
        method: 'post',
        headers: {
            Authorization: "Bearer " + Auth,
        }
    }).then(res => {setResult(true);console.log(res)}).catch(err => console.log(err))
}

export const axiosRecruitApply = (recruitCarfullID, Auth, setResult) => {
    axios({
        url: `${API.RECRU_APL}/${recruitCarfullID}`,
        method: 'post',
        headers: {
            Authorization: "Bearer " + Auth,
        }
    }).then(res => {setResult(true);console.log(res)}).catch(err => console.log(err))
}

export const axiosRecruitOwner = (formData, Auth, setResult)=>{
    axios({
        url: `${API.RECRU_OWN}`,
        method: 'post',
        headers: {
            Authorization: "Bearer " + Auth,
        },
        data : formData
    }).then(res => {
        if(res.data == true){
            setResult(true);
        }
        else{
            setResult(false);
        }
    }).catch(err=>console.log(err))
}

export const axiosRecruitDetail = (params, setResult)=>{
    axios({
        url: `${API.RECRUIT}/${params}`,
        method : 'get',
    }).then(res=>{
        setResult(res.data);
    })
        .catch(err=>console.log(err));
}
