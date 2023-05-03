import React from 'react';
import stl from './RecruitPost.module.css';

function RecruitListItem(props) {
    const { recruitPost, onClick } = props;

    return (
        <table onClick={onClick} className={stl.recruitListItemWrapper}>
            <thead>
                <th>{recruitPost.boardTitle}</th>
                <th>{recruitPost.applyPersonCount + `/` + recruitPost.personLimit + `명`}</th>
            </thead>

            <tbody>
                <td className={stl.points}>
                    <ul>
                        <li>{recruitPost.startPoint}</li>
                        <li>{`->`}</li>
                        <li>{recruitPost.endPoint}</li>
                    </ul>
                </td>
                <td>
                    {recruitPost.startTime}
                </td>
            </tbody>
        </table>
    );
}

export default RecruitListItem;