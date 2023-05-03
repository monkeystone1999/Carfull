import {useDispatch} from "react-redux";
import SlideShow from "../components/home/SlideShow";


function Home(){
    const dispatch = useDispatch();
    
    return(
        <>
            <SlideShow/>
        </>
    )
}
export {Home}

const CheckUser = ()=>{
    localStorage.getItem('access_token')
}