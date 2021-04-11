import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Main from '../components/Main/Main';
import Details from '../components/Details/Details';
import { useSelector } from 'react-redux';
import Error from '../components/Error';


const Home = (props) => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    // const userInfo = localStorage.getItem('userInfo');

    useEffect(() => {
        if (!userInfo) {
            props.history.push('/login');
        }
    }, [props.history, userInfo])
    
    return (
        <div>
            <Grid container spacing={0} justify="center">
                    <Grid item xs={12} md={5} >
                        <Main title="Your Expense Tracker" />
                    </Grid>
                    <Grid xs={12} md={5} flexDirection="column" alignItems="flex-end" justify="space-between">
                        <Grid item >
                            <Details title="Income" />
                        </Grid>
                        <Grid item >
                            <Details title="Income" />
                        </Grid>
                    </Grid>
                </Grid>
        </div>
    )
}

export default Home;
