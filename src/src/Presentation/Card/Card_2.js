import stl from "./Element/Card.module.css";


function Card_2(props){
    const {value, onClick} = props
    return (
        <>
            <div className={`${stl.Card}`}>
                <div className={`${stl.Card_Title}`}>
                    <span>제목 : {value.boardTitle}</span>
                </div>
                <div className={`${stl.Body}`}>
                    <span>{value.startPoint}</span>
                    <span>{value.endPoint}</span>
                    <span>{value.fee}</span>
                </div>
                <div className={`${stl.CardHidden}`}>
                    <div className={`${stl.HiddenBody}`}>
                        <span>{value.applyPersonCount + `/` + value.personLimit}</span>
                        <button onClick={onClick}>자세히 보기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Card_2}