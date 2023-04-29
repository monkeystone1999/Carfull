import axios from "axios";
import {API} from "../../config";
import {setBoard} from "../../reducer/store";
import {useDispatch} from "react-redux";
import {useEffect} from "react";


function Home(){
    const dispatch = useDispatch();
    useEffect(()=>{
        BaseHome(dispatch);

    },[])
    return(
        <>
            Home!
        </>
    )
}
export {Home}

const BaseHome = (dispatch)=>{
    axios({
        url: `${API.RECRUIT}`,
        method: 'get',
    }).then(res => {
        dispatch(setBoard(res.data))
    }).catch(err => console.log(err))
}
const CheckUser = ()=>{
    localStorage.getItem('access_token')
}