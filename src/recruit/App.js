import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Recruit() {

    const motherBoard = useSelector((state)=>state.MB.board)
    return (
        <>
            {
                motherBoard.map((value) => {
                    return value.map(result =>{
                        return (
                            <>
                                <Recruit_list boardTitle={result.boardTitle}>
                                </Recruit_list>
                                <Link to={`/detail/${result.recruitCarfullID}`}><button>상세보기</button></Link>
                                <br/>
                            </>)
                    })
                })
            }
        </>
    )
}
function Recruit_list({boardTitle}) {
    return (
        <>
            <div>{boardTitle}</div>
        </>
    )
}


export {Recruit}