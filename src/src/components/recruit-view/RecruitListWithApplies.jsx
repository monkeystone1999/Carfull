import React from 'react';
import stl from './RecruitPost.module.css';
import MyRecruitApplies from './myRecruitApplies';
import RecruitListItem from './RecruitListItem';
import { Navigate, useNavigate } from 'react-router-dom';
import MyRecruitAcceptedApplies from './MyRecruitAcceptedApplies';
import MyRecruitStatus from './MyRecruitStatus';
import { useState } from 'react';
import { MyChat } from '../../routes/MyChat';

function RecruitListWithApplies(props) {
    const { recruitPosts } = props;
    const navigate = useNavigate();
    const [onChat, setChat] = useState(false);

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

                        <div className={stl.myRecruitAppliesContainer}>
                            <div className={stl.myRecruitAppliesLeft}>
                                <MyRecruitStatus
                                    key={recruitPost.recruitCarfullID}
                                    recruitPost={recruitPost}
                                />
                            </div>

                            <div className={stl.myRecruitAppliesRight}>
                                <button onClick={() => setChat(true)}>채팅하기</button>
                            </div>
                            {
                                onChat ? <MyChat
                                setChat={setChat}
                                onChat={onChat}
                                nick={recruitPost.writeMember.nick}
                                recruitPostID={recruitPost.recruitCarfullID}
                                title={recruitPost.boardTitle
                            }/> : null
                }
                        </div>

                        
                        
                    </>
                );
            })}
        </div>
    );
}

export default RecruitListWithApplies;