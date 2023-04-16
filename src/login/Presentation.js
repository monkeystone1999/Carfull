import React from "react";

export function Login_MainFunc({setId, setPassword}){
    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    setId(e.target.value);
                }}
                placeholder="id"
            />
            <input
                type="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                placeholder="password"
            />
            </>
    )
}