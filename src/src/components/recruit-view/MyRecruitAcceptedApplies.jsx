import React from 'react';
import { useEffect } from 'react';
import { API } from '../../../config';
import axios from 'axios';
import { useState } from 'react';
import stl from './RecruitPost.module.css';

function MyRecruitAcceptedApplies(props) {
    const { recruitPost } = props;
    const [applies, setApplies] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const formData = new FormData();
    formData.append('recruit_ID', parseInt(recruitPost.recruitCarfullID));


    useEffect(() => {
        axios({
            url: API.RECRU_APL_WITH_LIST,
            method: 'post',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            },
            data: formData
            }).then(res => {
                setApplies(res.data);
            }).catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h2>동승 예정 사용자 목록</h2>
            {applies.map((apply, index) => {
                //debug
                // console.log(apply);
                return (
                    <>
                        <hr />
                        <h4>{apply.applicant.idNumber} | {apply.applicant.nick}</h4>
                        <button onClick={() => MemberKick(recruitPost.recruitCarfullID, apply.applicant.idNumber, refresh, setRefresh)}>추방</button>
                    </>
                );
            })}
        </div>
    );
}

function MemberKick(recruit_id, member_id, refresh, setRefresh) {
    const formData_applyID = new FormData();
    formData_applyID.append('recruit_ID', parseInt(recruit_id));
    formData_applyID.append('member_ID', parseInt(member_id));

    axios({
        url: API.RECRU_APL_KICK,
        method: 'post',
        headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        },
        data: formData_applyID
        }).then(res => {
            //setApplies(res.data);
            setRefresh(!refresh);
        }).catch(err => console.log(err))
}

export default MyRecruitAcceptedApplies;