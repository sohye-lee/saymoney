import React from 'react';

const Header = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const today = `${month} ${day}, ${year}`;

    return (
        <div className="nav row between">
            <div className="row left">
                <div className="nav__logo">
                    <img className="logo__img" src="https://img.icons8.com/ios/50/ffffff/light-on--v3.png" alt="logo"/>
                </div>
                <p className="nav__hello">Hello, Sophie</p>
            </div>
            <div className="row right">
                <p className="nav__date">{today}</p>
            </div>
        </div>
    )
};

export default Header;
