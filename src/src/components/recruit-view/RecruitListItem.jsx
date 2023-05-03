import React from 'react';
import stl from './RecruitPost.module.css';

function RecruitListItem(props) {
    const { recruitPost, onClick } = props;

    return (
        <div onClick={onClick} className={stl.recruitListItemWrapper}>
            <p className={stl.titleText}>{recruitPost.boardTitle}</p>
        </div>
    );
}

export default RecruitListItem;