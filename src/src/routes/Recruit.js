import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {API} from "../../config";
import {setBoard} from "../../reducer/store";
import RecruitList from "../components/recruit/RecruitList";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function Recruit(){

    const [recruitBoard, setRecruitBoard] = useState([]);
    const navigate = useNavigate();

    axios({
    url: `${API.RECRUIT}`,
    method: 'get',
    }).then(res => {
        setRecruitBoard(res.data);
    }).catch(err => console.log(err))

    return (
        <Wrapper>
            <Container>
                <RecruitList
                    recruitPosts = {recruitBoard}
                    onClickItem = {(item) => {
                        navigate(`/detail/${item.recruitCarfullID}`);
                    }}
                />
            </Container>
        </Wrapper>
    )

    // const motherBoard = useSelector((state)=>state.MB.board)
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     BaseHome(dispatch);
    // },[])

    // return(
    //     <>
    //         {
    //             motherBoard.map((value) => {
    //                 return value.map(result =>{
    //                     return (
    //                         <>
    //                             <div>{result.boardTitle}</div>
    //                             <Link to={`/detail/${result.recruitCarfullID}`}><button>상세보기</button></Link>
    //                             <br/>
    //                         </>)
    //                 })
    //             })
    //         }
    //     </>
    // )
}

// const BaseHome = (dispatch)=>{
//     axios({
//         url: `${API.RECRUIT}`,
//         method: 'get',
//     }).then(res => {
//         dispatch(setBoard(res.data))
//     }).catch(err => console.log(err))
// }

export {Recruit}