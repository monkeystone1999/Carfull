import stl from "./Card.module.css";

function RecruitCard(props){
    const {key, recruitPost, onClick} = props;
    return (
        <>
            <div className={stl.Container}>
                <div className={stl.Header}>

                </div>
            </div>
        </>
    )
}
export {RecruitCard}

// APi key 들은 서버에 저장하고 이걸 또 암호화 해야겠다