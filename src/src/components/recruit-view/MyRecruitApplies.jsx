import React from 'react'
import {useEffect, useState} from "react";;
import stl from './RecruitPost.module.css';

function MyRecruitApplies(props) {
    const { recruitPost } = props;
    const [applies, setApplies] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const formData = new FormData();
    formData.append('recruit_ID', parseInt(recruitPost.id));

    useEffect(() => {
        axios({
            url: `${API.RECRU_APL_LIST}`,
            method: 'post',
            data: formData
            }).then(res => {
                setApplies(res.data);
            }).catch(err => console.log(err))
      });

    return (
        <div className={stl.recruitListWrapper}>
            {applies.map((apply, index) => {
                return (
                    <>
                        <hr />
                        <div><h2>{apply.applicant.nick}</h2></div>
                        <div>
                            <button onClick={AcceptApply(apply.ApplyId, refresh ,setRefresh)}>수락</button>
                            <button onClick={DenyApply(apply.ApplyId, refresh, setRefresh)}>거절</button>
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
        url: `${API.RECRU_APL_ACCEPT}`,
        method: 'post',
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
        url: `${API.RECRU_APL_DENY}`,
        method: 'post',
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