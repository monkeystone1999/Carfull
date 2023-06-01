import stl from "./Recruit.module.css"
import React from "react";
import {RecruitCard} from "./RecruitComponent/RecruitCard";

function RecruitTotal(props){
    const { recruitPosts, onClickItem } = props;
    return(
        <>
            <div className={stl.Container}>
                {recruitPosts.map((recruitPost, index) => {
                    return (
                        <RecruitCard
                            key={recruitPost.id}
                            recruitPost={recruitPost}
                            onClick={() => {
                                onClickItem(recruitPost);
                            }}
                        />
                    );
                })}
            </div>
        </>
    )
}


export{RecruitTotal}