import axios from "axios";
import {API} from "../config";


export const Sign_Submit = (formData, setResult)=>{
    axiosSign(formData, setResult);
}

export const axiosSign = (formData, setResult) =>{
    axios({
        url: `${API.SIGN}`,
        method: "post",
        data: formData,
    }).then(res => {
        setResult(true);
        alert("환영합니다! 다시 로그인해주세요")
    }).catch(err => {
        console.log(err)
    })
}