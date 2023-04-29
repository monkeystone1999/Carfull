import axios from "axios";
import {useDispatch} from "react-redux";
import {useEffect} from "react";


function Home(){
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     BaseHome(dispatch);

    // },[])
    return(
        <>
            Home!
        </>
    )
}
export {Home}

const CheckUser = ()=>{
    localStorage.getItem('access_token')
}