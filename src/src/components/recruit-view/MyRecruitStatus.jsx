import React, { useEffect } from 'react';
import axios from 'axios';
import { API } from '../../../config';
import stl from './RecruitPost.module.css';

function MyRecruitStatus(props) {
    const { recruitPost } = props;
    let status = Default(recruitPost.recruitCarfullID);

    // useEffect(() => {
    //     axios({
    //         url: API.,
    //         method: 'post',
    //         headers: {
    //             Authorization: "Bearer " + localStorage.getItem("access_token")
    //         },
    //         data: formData
    //         }).then(res => {
    //             setApplies(res.data);
    //         }).catch(err => console.log(err))
    // }, []);
    if(recruitPost.needStartAgree) {
        status = StartAgree();
    }

    if(recruitPost.started) {
        status = Started(recruitPost.recruitCarfullID);
    }

    if(recruitPost.needArriveAgree) {
        status = ArriveAgree();
    }

    if(recruitPost.arrived) {
        status = Arrived();
    }    

    return status;
    
}

function Default(recruit_ID) {
    return (
      <div className={stl.statusWrapper}>
        <h3 className={stl.statusDefaultHeader}>준비 중</h3> <hr />

        <div className={stl.statusButtonContainer}>
            <button className={stl.statusDefaultButton} onClick={() => changeToStartAgree(recruit_ID)}>출발 동의</button>
        </div>
      </div>
    );
}

function StartAgree() {
    return (
        <div className={stl.statusWrapper}>
          <h3 className={stl.statusStartAgreeHeader}>출발 준비 중</h3> <hr />
          <span className={stl.statusStartAgreeText}>탑승자들의 출발 동의를 기다리고 있어요</span>
        </div>
      );
}

function Started(recruit_ID) {
    return (
        <div className={stl.statusWrapper}>
            <h3 className={stl.statusStartedHeader}>운전 중</h3> <hr />
            <div className={stl.statusButtonContainer}>
                <span>도착 하셨나요?</span>
                <button className={stl.statusArriveAgreeButton} onClick={() => changeToArriveAgree(recruit_ID)}>도착 동의</button>
            </div>
        </div>
      );

}

function ArriveAgree() {
    return (
        <div className={stl.statusWrapper}>
            <h3 className={stl.statusArriveAgreeHeader}>도착 준비 중</h3> <hr />
            <span className={stl.statusArriveAgreeText}>탑승자들의 도착 동의를 기다리고 있어요</span>
        </div>
      );
}

function Arrived() {
    return (
        <div className={stl.statusWrapper}>
            <h3 className={stl.statusArrivedHeader}>도착</h3> <hr />
            <span className={stl.statusArrivedText}>여정을 마쳤어요!</span>
        </div>
      );
}

function changeToStartAgree(recruit_id) {
    const formData_recruit = new FormData();
    formData_recruit.append('recruit_ID', parseInt(recruit_id));

    axios({
        url: API.RECRU_START,
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

function changeToArriveAgree(recruit_id) {
    const formData_recruit = new FormData();
    formData_recruit.append('recruit_ID', parseInt(recruit_id));

    axios({
        url: API.RECRU_ARRIVE,
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

export default MyRecruitStatus;

// private boolean needStartAgree;   출발하고 싶어 함
// private boolean started;         출발 함
// private boolean needArriveAgree;  도착하고 싶어 함
// private boolean arrived;         도착 함