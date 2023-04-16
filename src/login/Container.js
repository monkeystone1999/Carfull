import axios from "axios";
import {API} from "../config";
import {setToken} from "../export/access";
import {setCookie} from "../export/refresh";

export const Login_Submit = (formData, setUser)=>{
    axiosLogin(formData, setUser)
}

export const axiosLogin = (formData, setUser)=>{
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
            setUser(true);
        })
        .catch((e) => {
            console.log(e);
        });
}