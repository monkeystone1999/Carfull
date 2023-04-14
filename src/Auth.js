import { createContext } from "react";

export const AuthContext = createContext();

// export function useAuth() {
//     return useContext(AuthContext);
// }
// 원래 useAuth 처럼 useContext 를 쓰는게 가독성에 훨씬 좋다
