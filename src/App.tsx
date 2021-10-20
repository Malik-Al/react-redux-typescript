import React, {useContext, useEffect, useState} from 'react';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
// import { BrowserRouter } from 'react-router-dom';

const App = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // check().then(data => {
        //     user.setUser(true)
        //     user.setIsAuth(true)
        // }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <>
            <NavBar />
            <AppRouter />
        </>
    );
};

export default App;
