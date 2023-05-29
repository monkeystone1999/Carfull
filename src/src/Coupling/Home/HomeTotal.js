import stl from "./Home.module.css"
import {LinkToMyInfo} from "./HomeComponent/LinkToMyInfo";
import {LinkToRecruit} from "./HomeComponent/LinkToRecruit";
import {LinkToEvent} from "./HomeComponent/LinkToEvent";
import {Navbar} from "../../Presentation/Navbar/Navbar";

function HomeTotal(props) {
    return (
        <>
            <Navbar/>
            <div className={stl.Container}>
                <div className={stl.FirstRow}>
                    <LinkToRecruit/>
                    <LinkToMyInfo/>
                </div>
                <LinkToEvent/>
            </div>
        </>
    )

}

export {HomeTotal}