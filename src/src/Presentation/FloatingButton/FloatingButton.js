import stl from "./Element/FloatingButton.module.css"
import {MyChat} from "../../routes/MyChat";

function FloatingButton(){

    return(
        <>
            <div className={stl.Container} onClick={()=>{
                <MyChat

                />
            }}>
                Chat
            </div>
        </>
    )
}

export {FloatingButton}
//Error: Cannot find file: 'myRecruitApplies.jsx' does not match the corresponding name on disk: './src/src/components/recruit-view/MyRecruitApplies.jsx'.