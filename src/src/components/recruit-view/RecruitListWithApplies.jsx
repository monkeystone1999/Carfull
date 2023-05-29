import React from 'react'
import {useEffect, useState} from "react";;
import stl from './RecruitPost.module.css';
import MyRecruitApplies from './myRecruitApplies';

function RecruitListWithApplies(props) {
    const { recruitPosts } = props;

    return (
        <div className={stl.recruitListWrapper}>
            {recruitPosts.map((recruitPost, index) => {
                return (
                    <>
                        <RecruitListItem
                            key={recruitPost.id}
                            recruitPost={recruitPost}
                            onClick={() => {
                                onClickItem(recruitPost);
                            }}
                        />
                        <MyRecruitApplies
                            key={recruitPost.id}
                            recruitPost={recruitPost}
                        />
                    </>
                );
            })}
        </div>
    );
}