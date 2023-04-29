import React from 'react';
import styled from 'style-components';
import RecruitListItem from './RecruitListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function RecruitList(props) {
    const { recruitPosts, onClickItem } = props;

    return (
        <Wrapper>
            {recruitPosts.map((recruitPost, index) => {
                return (
                    <RecruitListItem
                        key={recruitPost.id}
                        post={recruitPost}
                        onClick={() => {
                            onClickItem(recruitPost);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
    
}

export default RecruitList;