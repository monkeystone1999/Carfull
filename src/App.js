/* eslint-disable*/
import './App.css';
import {AuthContextProvider} from "./AuthContext";
import axios from "axios";
import {Main} from "./src/main";
function App() {
    // 각 페이지마다 model view viewmodel 을 만드는데 중복이 되는거면 어떻게 해야하지?
    axios.defaults.withCredentials = true;
    return (
        <>
            <AuthContextProvider>
                <Main/>
            </AuthContextProvider>
        </>
    );
}

export default App;
