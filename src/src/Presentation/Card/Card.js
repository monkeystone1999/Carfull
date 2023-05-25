import stl from "./Card.module.css";

function Card(props){
    const {title, fee} = props;

    return (
        <>
            <div className={stl.CardContainer}>
                <div className={stl.CardHeader}>
                    <span>{title}</span>
                    <span className={stl.HeaderHidden}>{fee}</span>
                </div>
                <div className={stl.CardBody}>

                </div>
            </div>
        </>
    )
}

export {Card}