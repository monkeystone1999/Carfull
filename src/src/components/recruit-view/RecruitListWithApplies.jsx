import React from 'react';
import stl from './RecruitPost.module.css';
import MyRecruitApplies from './myRecruitApplies';
import RecruitListItem from './RecruitListItem';
import { Navigate } from 'react-router-dom';

function RecruitListWithApplies(props) {
    const { recruitPosts } = props;

    return (
        <div className={stl.recruitListWrapper}>
            {recruitPosts.map((recruitPost, index) => {
                return (
                    <>
                        <RecruitListItem
                            key={recruitPost.recruitCarfullID}
                            recruitPost={recruitPost}
                            onClick={(item) => {
                                Navigate(`/detail/${item.recruitCarfullID}`);
                            }}
                        />
                        <MyRecruitApplies
                            key={recruitPost.recruitCarfullID}
                            recruitPost={recruitPost}
                        />
                    </>
                );
            })}
        </div>
    );
}

export default RecruitListWithApplies;