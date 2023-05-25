import stl from "./Navbar.module.css";

function NavHeader(props){
    const {header_url} = props
    return(
        <>
            <header>
                <div className={stl.content}>
                    {
                        header_url.map(value => {
                            return (
                                <>
                                    <span className={stl.header_url}>
                                    {value}
                                    </span>
                                </>
                            )
                        })
                    }
                </div>
            </header>
        </>
    )
}
export {NavHeader}