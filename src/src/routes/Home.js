import {useDispatch} from "react-redux";
import {HomeTotal} from "../Coupling/Home/HomeTotal";


function Home(){
    const dispatch = useDispatch();
    
    return(
        <>
            <HomeTotal/>
        </>
    )
}
export {Home}

const CheckUser = ()=>{
    localStorage.getItem('access_token')
}