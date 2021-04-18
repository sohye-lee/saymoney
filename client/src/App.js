import React, { useRef } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import { useSelector } from 'react-redux';

import Login from './screens/Login';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Settings from './screens/Settings';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    return (
        <BrowserRouter>
            <div className="appContainer">
                {/* BACKGROUND SETTING */}
                <div className="sky">
                    <div className="stars"></div>
                    <div className="stars1"></div>
                    <div className="stars2"></div>
                    <div className="shooting-stars"></div>
                </div>
                <Header userInfo={userInfo} />
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/settings" component={Settings} />
                <Footer />
            </div>
        </BrowserRouter>
    )
};

export default App;
