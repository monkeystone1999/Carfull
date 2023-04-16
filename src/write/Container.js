
import axios from "axios";
import {API} from "../config";

export const Write_Submit = (formData, setWrite)=>{
    const access_token = localStorage.getItem("access_token");
    axiosWrite(formData,access_token, setWrite);
}
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