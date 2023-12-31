import './App.scss'
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Layout>
            <Routes>
                <Route index path={"/home"} element={<Hello/>}/>
                <Route path={"/profile"} element={<Hello2/>}/>
                <Route path={"/catalog"} element={<Hello3/>}/>
                <Route path={"/basket"} element={<Hello4/>}/>
            </Routes>
        </Layout>

    )
}

export default App;
export const Hello = () => {
    return <h1>hello 1</h1>
}
export const Hello2 = () => {
    return <h1>hello 2</h1>
}

export const Hello3 = () => {
    return <h1>hello 3</h1>
}
export const Hello4 = () => {
    return <h1>hello 4</h1>
}
