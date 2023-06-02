import React from 'react';
import {useEffect, useState} from "react"
import stl from './RecruitPost.module.css';
import {API} from "../../../config";
import axios from 'axios';

function MyRecruitApplies(props) {
    const { recruitPost } = props;
    const [applies, setApplies] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const formData = new FormData();
    formData.append('recruit_ID', parseInt(recruitPost.recruitCarfullID));

    useEffect(() => {
        axios({
            url: `${API.RECRU_APL_LIST}`,
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
            <h2>카풀 신청자 목록</h2>
            {applies.map((apply, index) => {
                //debug
                // console.log(apply);
                return (
                    <>
                        <hr />
                        <h4>{apply.applicant.idNumber} | {apply.applicant.nick}</h4>
                        <div>
                            <button onClick={() => AcceptApply(apply.applyId, refresh ,setRefresh)}>수락</button>
                            <button onClick={() => DenyApply(apply.applyId, refresh, setRefresh)}>거절</button>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

function AcceptApply(applyID, refresh, setRefresh) {
    const formData_applyID = new FormData();
    formData_applyID.append('recruit_ID', parseInt(applyID));

    axios({
        url: API.RECRU_APL_ACCEPT,
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

function DenyApply(applyID, refresh, setRefresh) {
    const formData_applyID = new FormData();
    formData_applyID.append('recruit_ID', parseInt(applyID));

    axios({
        url: API.RECRU_APL_DENY,
        method: 'post',
        headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        },
        data: formData_applyID
        }).then(res => {
           // setApplies(res.data);
           setRefresh(!refresh);
        }).catch(err => console.log(err))
}


export default MyRecruitApplies;

// private long ApplyId;
// private RecruitCarfull recruitCarfull;
// private Member applicant;
// private boolean cancelled;
// private boolean accepted;
// private boolean denied;
// LocalDateTime applyTime;