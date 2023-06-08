import stl from "./Element/Card_2.module.css";


function Card_2(props) {
    const {value, btn} = props
    return (
        <>
            <div className={`${stl.Card}`}>
                <div className={`${stl.Card_Title}`}>
                    <span>제목 : {value.boardTitle}</span>
                </div>
                <div className={`${stl.Body}`}>
                    <div className={`${stl.des}`}>
                        <span>출발지 : {value.startPoint}</span>
                        <span>도착지 : {value.endPoint}</span>
                        <span>가격 : {value.fee}</span>
                        <span>인원 : {value.applyPersonCount + `/` + value.personLimit}</span>
                        <span>전달사항 : {value.comment}</span>
                    </div>
                    {btn}
                </div>
            </div>
        </>
    )
}

export {Card_2}