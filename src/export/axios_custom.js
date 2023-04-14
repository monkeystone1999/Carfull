import axios from "axios";
import {API} from "../config";
import {setCookie} from "./refresh";
import {setToken} from "./access";


export const axiosLogin = (formData, setLogin) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    axios({
        // 이 부분이 config 부분
        url: `${API.LOGIN}`,
        method: "post",
        data: formData,
        //     요까지
    })
        .then((data) => {
            const get_data = data.data.token;
            setToken('access_token', get_data['access_token'].replaceAll("\"", ""));
            setCookie('refresh_token', get_data['refresh_token'].replaceAll("\"", ""));
            setLogin(true);
        })
        .catch((e) => {
            console.log(e);
        });
}

export const axiosSign = (formData, setSign) => {
    axios({
        url: `${API.SIGN}`,
        method: "post",
        data: formData,
    }).then(res => {
        setSign(true);
        alert("환영합니다! 다시 로그인해주세요")
    }).catch(err => {
        console.log(err)
    })
}

// const AccessAxios = axios.create({
//     baseURL: `${API.BASEURL}`,
//     headers: { "Content-type": "application/json" }
// })
//
// AccessAxios.interceptors.request((config)=>{
//
// })

export const axiosWrite = (formData, Auth, setResult) => {
    axios({
        url: `${API.WRITE}`,
        method: 'post',
        data: formData,
        headers: {
            Authorization: "Bearer " + Auth,
        }
    }).then(res => {
        console.log(res);
        setResult(true);
        alert('등록이 되었습니다!');
    }).catch(err => {
    })
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

//signup/check/ nick | id

export const axiosCheckSign = (target, formData)=>{
    axios({
        url: `${API.SIGN}/check/${target}`,
        method: 'get',
        data : formData,
    }).then(res => console.log(res))
        .catch(err=>console.log(err))
}