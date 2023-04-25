import axios from "axios";
import {API} from "../config";

export const axiosMyInfo = (Auth,setInfo)=>{
    axios({
        url:`${API.INFO}`,
        method:'get',
        headers: {
            Authorization: "Bearer " + Auth,
        }
    }).then((res)=>{
        setInfo(res.data);
    }).catch(err=>console.log(err));
}

//AuthenticationPrincipal UserDetailsEntity member
//import anu.ice.WithCar.domain.dto.UserDetailsEntity;
//import anu.ice.WithCar.domain.entity.Member;
//Long idNumber;
//     @Column(unique = true)
//     String userId;
//     String pw;
//     @Column(unique = true)
//     String nick;
//     String email;
//     String phoneNumber;