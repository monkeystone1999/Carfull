import React from 'react';
import stl from './RecruitPost.module.css';
import MyRecruitApplies from './myRecruitApplies';
import RecruitListItem from './RecruitListItem';
import { Navigate, useNavigate } from 'react-router-dom';
import MyRecruitAcceptedApplies from './MyRecruitAcceptedApplies';

function RecruitListWithApplies(props) {
    const { recruitPosts } = props;
    const navigate = useNavigate();

    return (
        <div className={stl.recruitListWrapper}>
            {recruitPosts.map((recruitPost, index) => {
                return (
                    <>
                        <RecruitListItem
                            key={recruitPost.recruitCarfullID}
                            recruitPost={recruitPost}
                            onClick={() => {
                                navigate(`/detail/${recruitPost.recruitCarfullID}`);
                            }}
                        />
                        <div className={stl.myRecruitAppliesContainer}>
                            <div className={stl.myRecruitAppliesLeft}>
                                <MyRecruitAcceptedApplies
                                    key={recruitPost.recruitCarfullID}
                                    recruitPost = {recruitPost}
                                />
                            </div>

                            <div className={stl.myRecruitAppliesRight}>
                                <MyRecruitApplies
                                    key={recruitPost.recruitCarfullID}
                                    recruitPost={recruitPost}
                                />
                            </div>
                        </div>
                        
                    </>
                );
            })}
        </div>
    );
}

export default RecruitListWithApplies;