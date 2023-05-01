import {useState} from "react";
import axios from "axios";
import {API} from "../../config";
import {setInfo} from "../../reducer/store";


function MyInfoChangePW(){
    const [isExPW, setExPW] = useState(); // 지금 사용하고있는 비밀번호
    const [isPW, setPW] = useState(); // 앞으로 사용할 비밀번호
    const formData = new FormData();
    formData.append("")

    // 비밀번호를 한번 확인하는 과정을 추가해야할듯
    return(
        <>
            <input
                onChange={(e)=>{
                    setExPW(e.target.value);
                }}
            />
            <input

            />
            <button onClick={()=>{
                MyInfoChangePWSubmit(formData);
            }}/>
        </>
    )
}


export {MyInfoChangePW}


const MyInfoChangePWSubmit = (formData)=>{
    const access_token = localStorage.getItem("access_token")
    axios({
        url:`${API.CHANGE_PAWD}`,
        method:'post',
        headers: {
            Authorization: "Bearer " + access_token,
        },
        data: formData
    }).then((res)=>{

    }).catch(err=>console.log(err));
}