import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';
import { GetDate } from './GetDate';

const Header = ({userInfo}) => {
    const dispatch = useDispatch();
    let dateObj = new Date();
    const [hour, setHour] = useState(dateObj.getHours());
    const [minutes, setMinutes] = useState(dateObj.getMinutes());
    const [seconds, setSeconds] = useState(dateObj.getSeconds());
    const today = GetDate(dateObj);
    let time = `${hour>=10 ? hour: '0'+hour}:
                 ${minutes>=10 ? minutes : '0'+minutes}:
                 ${seconds>=10 ? seconds : '0'+seconds}`;


    const [display, setDisplay] = useState("none");
    const toggleHandler = () => {
        if (display === 'none') {
            setDisplay('block');
        } else {
            setDisplay('none');
        }
    }

    const logoutHandler = () => {
        dispatch(logout());
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // eslint-disable-next-line
            dateObj = new Date();
            setHour(dateObj.getHours());
            setMinutes(dateObj.getMinutes());
            setSeconds(dateObj.getSeconds());
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="nav row between" id="header">
            <div className="row left">
                <div className="nav__logo">
                    <Link to="/" style={{width: "100%", height:"100%"}}><img className="logo__img" src="https://img.icons8.com/ios/50/ffffff/light-on--v3.png" alt="logo"/></Link>
                </div>
                <div className="nav__hello row" onClick={toggleHandler}>
                    <p>{userInfo? 'Hello, '+userInfo.name : 'Welcome'} !</p>
                    <span className="nav__hello__underbar"></span>
                    <div className="nav__downmenu" style={{display: display}}>
                        <div onClick={() => {logoutHandler(); setDisplay('none')}}>logout</div>
                        <div>profile</div>
                        <div><Link to="settings" style={{textDecoration:"none", color:"var(--White)"}}>categories</Link></div>
                    </div>
                </div>
                
            </div>
            <div className="row right nav__right">
                <p className="nav__date"><span className="margin right">{today}</span><span>{time}</span></p>
            </div>
        </div>
    )
};

export default Header;
