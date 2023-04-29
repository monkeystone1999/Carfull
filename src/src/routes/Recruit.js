import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {callBoard} from "../../reducer/store";

function Recruit() {
    const motherBoard = useSelector((state) => state.MB);
    callBoard();
    return (
        <>
            {
                motherBoard.map((value) => {
                    return (
                        <>
                            <div>{value.boardTitle}</div>
                            <Link to={`/detail/${value.recruitCarfullID}`}>
                                <button>상세보기</button>
                            </Link>
                            <br/></>
                    )
                })
            }
        </>
    )
}

export {Recruit}