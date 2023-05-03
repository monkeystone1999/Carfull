import React from 'react';
import RecruitListItem from './RecruitListItem';
import stl from './RecruitPost.module.css';

function RecruitList(props) {
    const { recruitPosts, onClickItem } = props;

    return (
        <div className={stl.recruitListWrapper}>
            {recruitPosts.map((recruitPost, index) => {
                return (
                    <RecruitListItem
                        key={recruitPost.id}
                        recruitPost={recruitPost}
                        onClick={() => {
                            onClickItem(recruitPost);
                        }}
                    />
                );
            })}
        </div>
    );
    
}

export default RecruitList;