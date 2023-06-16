import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API } from '../../../config';
import { Card_2 } from '../../Presentation/Card/Card_2';
import stl from '../myInfo/myInfo.module.css';

function MyInfoApplyWithNeedAgree(props) {
    const [applyPosts, setApply] = useState([]);

    useEffect(()=>{
        BaseMyInfoApply(setApply)
    },[]);
    
    return (
        <div className={stl.MyInfoApplyWithNeedAgreeWrapper}>
            {applyPosts.map((recruitPost, index) => {

                if(recruitPost.needStartAgree && !recruitPost.started) {
                    return (
                        <Card_2
                            value={recruitPost}
                            btn={<button className={stl.startAgreeButton} onClick={()=>{
                                StartAgree(recruitPost.recruitCarfullID);
                            }}>
                                출발에 동의해요
                            </button>}
                        />
                    );
                }
                
                if(recruitPost.needArriveAgree && !recruitPost.arrived) {
                    return (
                        <Card_2
                            value={recruitPost}
                            btn={<button className={stl.arriveAgreeButton} onClick={()=>{
                                ArriveAgree(recruitPost.recruitCarfullID);
                            }}>
                                도착에 동의해요
                            </button>}
                        />
                    );
                }
            })}
        </div>
    );
}

const StartAgree = (recruit_id) => {
    const formData_recruit = new FormData();
    formData_recruit.append('recruit_ID', parseInt(recruit_id));

    axios({
        url: `${API.RECRU_START_AGREE}`,
        method: 'post',
        headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        },
        data: formData_recruit
        }).then(res => {
            //setApplies(res.data);
            // setRefresh(!refresh);
        }).catch(err => console.log(err))
}

const ArriveAgree = (recruit_id) => {
    const formData_recruit = new FormData();
    formData_recruit.append('recruit_ID', parseInt(recruit_id));
 
    axios({
        url: `${API.RECRU_ARRIVE_AGREE}`,
        method: 'post',
        headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        },
        data: formData_recruit
        }).then(res => {
            //setApplies(res.data);
            // setRefresh(!refresh);
        }).catch(err => console.log(err))
}


const BaseMyInfoApply = (setApply)=>{
    const access_token = localStorage.getItem("access_token");
    axios({
        url:`${API.INFO_APL}`,
        method:'get',
        headers: {
            Authorization: "Bearer " + access_token,
        }
    }).then((res)=>{
        let copy = [...res.data];
        setApply(copy);
    }).catch(err=>console.log(err));
}

export default MyInfoApplyWithNeedAgree;