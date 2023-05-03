import React from 'react';
import stl from './RecruitPost.module.css';
import moment from 'moment/moment';

function RecruitListItem(props) {
    const { recruitPost, onClick } = props;

    let startDate = moment(recruitPost.startTime, "YYYY-MM-DD'T'HH:mm:ss").format('YYYY-MM-DD hh:mm');

    return (
        <table onClick={onClick} className={stl.recruitListItemWrapper}>
            <thead className={stl.tableHead}>
                <th className={stl.boardTitle}>{recruitPost.boardTitle}</th>
                <th className={stl.personCount}>{recruitPost.applyPersonCount + `/` + recruitPost.personLimit + `명`}</th>
            </thead>

            <tbody>
                <tr>
                    <td className={stl.points}>
                        <ul>
                            <li>{recruitPost.startPoint}</li>
                            <li>&#8212;</li>
                            <li>{recruitPost.endPoint}</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td className={stl.startTimetd}>
                        <span className={stl.startTimeLabel}>출발일</span>
                        <span className={stl.startTimeText}>{startDate}</span>
                    </td>
                    <td>
                        <span className={stl.feeText}>{recruitPost.fee}</span>
                        <span className={stl.feeWon}>원</span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default RecruitListItem;