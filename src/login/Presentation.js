import React from "react";
import styles from "./style.module.css";

export function Login_MainFunc({setId, setPassword}) {
    return (
        <>
            <div className={styles.boxing}>
                <div className={styles.input_box}>
                    <label className={styles.label}>

                        <input
                            className={styles.input_style}
                            type="text"
                            onChange={(e) => {
                                setId(e.target.value);
                            }} required
                        />
                        <p className={"placeholder"}>아이디</p>
                        <div className={styles.input_underline}></div>
                    </label>

                </div>
                <div className={styles.input_box}>
                    <label className={styles.label}>
                        <input
                            className={styles.input_style}
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} required
                        />
                        <p className={"placeholder"}>비밀번호</p>
                        <div className={styles.input_underline}></div>
                    </label>

                </div>
            </div>
        </>
    )
}
