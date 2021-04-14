import React, { useEffect } from 'react';
// import { Grid } from '@material-ui/core';
import Main from '../components/Main/Main';
import Details from '../components/Details/Details';
import { useSelector } from 'react-redux';


const Home = (props) => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            props.history.push('/login');
        }
    }, [props.history, userInfo])
    
    return (
        <div className="home__container">
            <div className="home__grid">
                <div className="home__item main">
                    <Main />
                </div>
                <div className="home__item details">
                    <div className="details__item">
                        <Details title="Income"/>
                    </div>
                    <div className="details__item">
                        <Details title="Expense"/>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Home;
