import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: calc(100% -32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

function RecruitListItem(props) {
    const { recruitPost, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{recruitPost.boardTitle}</TitleText>
        </Wrapper>
    );
}

export default RecruitListItem;