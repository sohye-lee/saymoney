import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
// import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';

const Details = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className="row center">
                <h5 className="title small">Income</h5>
            </div>
            <CardContent>
                <Typography variant="h6" >$50</Typography>
                {/* <Doughnut data="DATA" /> */}
            </CardContent>
        </Card>
    )
}

export default Details
