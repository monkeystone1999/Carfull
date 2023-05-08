import React from 'react';

function MyInfoApplyTotal(props){
    const {title, fee, personLimit, startPoint, endPoint, comment} = props
    return (
        <>
            <div><br/></div>
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

export {MyInfoApplyTotal}