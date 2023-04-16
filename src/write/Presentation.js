
import style from "./style.module.css";
export function Write_MainFunc({setTitle, setFee,setLimit,setStart,setEnd,setComment}){

    return <>
        <input type={"text"} name={"boardTitle"} onChange={(event)=>{
            setTitle(event.target.value);
        }} placeholder="제목"></input>
        <input type={"text"} name={"fee"} onChange={(event)=>{
            setFee(event.target.value);
        }} placeholder="가격"></input>
        <input type={"text"} name={"personLimit"} onChange={(event)=>{
            setLimit(event.target.value);
        }} placeholder="최대 인원수 제한"></input>
        <input type={"text"} name={"startPoint"} onChange={(event)=>{
            setStart(event.target.value);
        }} placeholder="출발"></input>
        <input type={"text"} name={"endPoint"} onChange={(event)=>{
            setEnd(event.target.value);
        }} placeholder="도착"></input>
        <textarea name={"comment"} onChange={(event)=>{
            setComment(event.target.value);
        }} placeholder="글"></textarea>
    </>
}