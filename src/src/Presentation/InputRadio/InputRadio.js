import stl from "./Element/InputRadio.module.css"
function InputRadio(props){
    const {Lvalue, Rvalue, name, Lname, Rname ,setAgree} = props;
    return(
        <>
            <div className={stl.Container}>
                <label className={`${stl.labelContainer}`}>
                    <input className={`${stl.Radio}`} type={"radio"} name={name} value={Lvalue} onChange={setAgree} ></input>
                    <span>{Lname}</span>
                </label>
                <label className={`${stl.labelContainer}`}>
                    <input className={`${stl.Radio}`} type={"radio"} name={name} value={Rvalue} id={Rname}  chekced="true" ></input>
                    <span>{Rname}</span>
                </label>
            </div>
        </>
    )
}
export {InputRadio}