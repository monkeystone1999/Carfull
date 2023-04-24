import React from "react";
import styles from "./style.module.css";

export function Login_MainFunc({setId, setPassword}) {
    return (
        <>
            <div className={styles.boxing}>
                <div className={styles.input_box}>
                    <input
                        className={styles.input_style}
                        type="text"
                        onChange={(e) => {
                            setId(e.target.value);
                        }}
                    />
                    <label className={styles.label}>아이디</label>
                    <div className={styles.input_underline}></div>
                </div>
                <div className={styles.input_box}>
                    <input
                        className={styles.input_style}
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <label>비밀번호</label>
                    <div className={styles.input_underline}></div>
                </div>
            </div>
        </>
    )
}