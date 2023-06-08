import stl from "./Body.module.css"

import React, {useState} from "react";
import {MyInfoApply} from "../../../routes/MyInfoApply";
import {Write} from "../../../routes/Write";
import {MyInfoWrite} from "../../../routes/MyInfoWrite";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function MyInfoBody(props) {
    const {nick} = props
    const content = [{
        title: "작성 내역", des: <MyInfoWrite/>
    }, {
        title: "신청 내역", des: <MyInfoApply nick={nick}/>
    }, {
        title: "모집 하기", des: <Write/>
    }
    ]

    return (
        <Tabs
        defaultActiveKey="profile"
        id="myInfo-tabs"
        className="m-3"
        justify
        variant="underline"
        >
            <Tab eventKey="home" title="작성 내역">
                <MyInfoWrite/>
            </Tab>
            <Tab eventKey="profile" title="신청 내역">
                <MyInfoApply nick={nick}/>
            </Tab>
            <Tab eventKey="contact" title="모집 하기">
                <Write/>
            </Tab>
        </Tabs>
    );
}

export {MyInfoBody}