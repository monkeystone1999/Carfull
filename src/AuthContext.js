
import { useState, createContext, useContext } from 'react';

// create context to use open
export const OpenStateContext = createContext();
export const OpenDispatchContext = createContext();
//     사용 예제 :
//     const isLogin = useAuthState();
//     const setLogin = useAuthDispatch();

export const AuthContextProvider = ({ children }) => {
//     useState 의 is 는 그저 useSelector 로 set은 useDispatch 로 통합해서
//     하나의 useState 에 2개의 createContext 가 붙는다
    /**얘가 model**/

    const [isLogin,setLogin] = useState(false);

    return (
        /**value={open}은 OpenStateContext 의 value 이고 useContext(OpenStateContext) 를 사용하는 useAuthState **/
        <OpenStateContext.Provider value = {isLogin}>
            <OpenDispatchContext.Provider value = {setLogin}>
                {children}
            </OpenDispatchContext.Provider>
        </OpenStateContext.Provider>
    );
};

/**useAuthState 는 보다시피 OpenStateContext 를 사용할 것이라는 코드고 그걸 변수에 담고 return 을 한다
 * 하지만 정확한 값은 OpenStateContext 의 value 에 있는 값,함수 를 전달받는다
 * 즉 useContext(OpenStateContext); 는 open 인 것이다**/
export function useAuthState() {
    const context = useContext(OpenStateContext);
    /**이걸 통해서 return 하는 context 는 value = {open} 을 가지게 된다
     * 즉 useContext 는 createContext 된 value 의 값을 전달받는다는 뜻이다**/
    return context;
}

export function useAuthDispatch() {
    const context = useContext(OpenDispatchContext);
    return context;
}