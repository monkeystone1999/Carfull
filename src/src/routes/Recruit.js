import {useNavigate} from "react-router-dom";
import {API} from "../../config";
import RecruitList from "../components/recruit-view/RecruitList";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <RecruitList
            recruitPosts={recruitBoard}
            onClickItem = {(item) =>{
                navigate(`/detail/${item.recruitCarfullID}`);
            }}
        />
    );
}

export {Recruit};