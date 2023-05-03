import {useNavigate} from "react-router-dom";
import {API} from "../../config";
import { useEffect, useState } from "react";
import axios from "axios";
import {RecruitTotal} from "../components/reStyle/recruit/recruitTotal";

function Recruit(){

    const [recruitBoard, setRecruitBoard] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios({
            url: `${API.RECRUIT}`,
            method: 'get',
            }).then(res => {
                setRecruitBoard(res.data);
            }).catch(err => console.log(err))
      }, []);

    return (
        <RecruitTotal
            recruitLists={recruitBoard}
            onClickItem = {(item) =>{
                navigate(`/detail/${item.recruitCarfullID}`);
            }}
        />
    );
}

export {Recruit};