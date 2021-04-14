import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
import Form from '../Form';
import List from '../List';

const Main = () => {
    const classes = useStyles();

    return (
        <Card className={classes.container}>
             <div className="row center">
                <h5 className="title small">Balance Tracker</h5>
            </div>
            <CardContent>
                <Typography variant="h5" align="center">Total Balance</Typography>
                <Typography className={classes.subtitle}>
                    {/* InfoCard */}
                    Try saying : Add Income for $100 in Category Salary For Monday
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.bottomContent}>
                <Grid container spacint={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;
