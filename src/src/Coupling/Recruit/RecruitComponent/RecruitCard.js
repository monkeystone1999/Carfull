import stl from "./Card.module.css";
import moment from "moment/moment";
import {Card} from "../../../Presentation/Card/Card";

function RecruitCard(props){
    const {key, recruitPost, onClick} = props;

    let startDate = moment(recruitPost.startTime, "YYYY-MM-DD'T'HH:mm:ss").format('YYYY-MM-DD hh:mm');
    return (
        <>
            <div className={stl.Container}>
                <Card
                    recruitPost={recruitPost}
                    onClick={onClick}
                />
            </div>
        </>
    )
}
export {RecruitCard}

// APi key 들은 서버에 저장하고 이걸 또 암호화 해야겠다