import React from 'react';
import { Grid } from '@material-ui/core';

import Details from './components/Details/Details';
import Header from './components/Header';

const App = () => {
    return (
        <div>
            <Header />
            <Grid container spacing={0} justify="center" className="">
                <Grid item sm={12} md={5} >
                    <Details />
                </Grid>
                <Grid spacing={1} md={5} flexDirection="column" alignItems="flex-end" justify="space-between">
                    <Grid item sm={12}>
                        <Details />
                    </Grid>
                    <Grid item sm={12}>
                        <Details />
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
};

export default App;
