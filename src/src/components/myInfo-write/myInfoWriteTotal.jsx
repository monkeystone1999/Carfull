import React from 'react';

function MyInfoWriteTotal(props){
    const {title, fee, personLimit, startPoint, endPoint, comment} = props
    return (
        <>
            <br/>
            <div>{title}</div>
            <div>{fee}</div>
            <div>{personLimit}</div>
            <div>{startPoint}</div>
            <div>{endPoint}</div>
            <div>{comment}</div>
            <br/>
        </>
    )
}

export {MyInfoWriteTotal}

//"boardTitle": "대구 갑니다",
//         "fee": 0,
//         "personLimit": 2,
//         "applyPersonCount": 1,
//         "startPoint": "안동대학교 도서관",
//         "endPoint": "동대구역",
//         "comment": "흡연자는 사양합니다",