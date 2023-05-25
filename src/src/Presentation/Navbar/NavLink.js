import stl from './Navbar.module.css';
import {Link} from "react-router-dom";

function Nav_Link(props) {
    const {title, subTitles, LinkTo} = props;
    return (
        <>
            <div className={stl.NavLinkBox}>
                <div className={`${stl.NavLink} ${stl.anchor}`}>
                    <Link to={`${LinkTo}`}>{title}</Link>
                </div>
                <div className={stl.subTitles}>
                    {subTitles.map(value => {
                        return (
                            <>
                                <div className={stl.subTitle}>
                                    {value}&nbsp;
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export {Nav_Link}