import stl from "./Element/Card.module.css";


function Card(props) {
    const {recruitPost, onClick} = props
    return (
        <>
            <div className={`${stl.Card}`}>
                <div className={`${stl.Card_Title}`}>
                    <span>{recruitPost.boardTitle}</span>
                </div>
                <div className={`${stl.Body}`}>
                    <span>{recruitPost.startPoint}</span>
                    <span>{recruitPost.endPoint}</span>
                    <span>{recruitPost.fee}</span>
                </div>
                <div className={`${stl.CardHidden}`}>
                    <div className={`${stl.HiddenBody}`}>
                        <span>{recruitPost.applyPersonCount + `/` + recruitPost.personLimit}</span>
                        <button onClick={onClick}>자세히 보기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Card}