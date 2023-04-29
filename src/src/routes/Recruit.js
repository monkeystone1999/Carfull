import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Recruit(){
    const motherBoard = useSelector((state)=>state.MB.board)
    return(
        <>
            {
                motherBoard.map((value) => {
                    return value.map(result =>{
                        return (
                            <>
                                <div>{result.boardTitle}</div>
                                <Link to={`/detail/${result.recruitCarfullID}`}><button>상세보기</button></Link>
                                <br/>
                            </>)
                    })
                })
            }
        </>
    )
}

export {Recruit}