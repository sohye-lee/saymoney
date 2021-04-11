import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import Login from './screens/Login';
import './styles.sass';
import './styles.css';
import Home from './screens/Home';
import Signup from './screens/Signup';


const App = () => {

    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {

    },[])



    return (
        <BrowserRouter>
            <div className="appContainer">
                {/* BACKGROUND SETTING */}
                    <div className="stars"></div>
                    <div className="stars1"></div>
                    <div className="stars2"></div>
                    <div className="shooting-stars"></div>

                <Header userInfo={userInfo} />
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </div>
        </BrowserRouter>
    )
};

export default App;
