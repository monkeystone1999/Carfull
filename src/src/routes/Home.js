import {useDispatch} from "react-redux";


function Home(){
    const dispatch = useDispatch();
    
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