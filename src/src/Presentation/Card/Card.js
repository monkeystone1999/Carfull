import stl from "./Element/Card.module.css";


function Card(props) {
    const {recruitPost, onClick} = props
    return (
        <>
            <div className={`${stl.Card}`}>
                <div className={`${stl.Card_Title}`}>
                    <span>제목 : {recruitPost.boardTitle}</span>
                </div>
                <div className={`${stl.Body}`}>
                    <span>출발지 : {recruitPost.startPoint}</span>
                    <span>도착지 : {recruitPost.endPoint}</span>
                    <span>가격 : {recruitPost.fee}</span>
                </div>
                <div className={`${stl.CardHidden}`}>
                    <div className={`${stl.HiddenBody}`}>
                        <span>인원 수 :{recruitPost.applyPersonCount + `/` + recruitPost.personLimit}</span>
                        <button onClick={onClick}>자세히 보기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Card}