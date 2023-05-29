import stl from "./Element/Input.module.css"

function Input(props) {
    const {id, label, setData, type} = props;
    return (
        <>
            <div className={stl.Container}>
                <input id={id} type={type} required className={stl.text_input} onChange={setData}/>
                <label htmlFor={id} className={stl.input_label}>{label}</label>
            </div>
        </>
    )
}

export {Input}