import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { useSpeechContext } from '@speechly/react-client';
import useStyles from './styles';
import Form from '../Form';
import List from '../List';

const Main = ({categories, transactions}) => {
    const classes = useStyles();
    const { segment } = useSpeechContext();

    return (
        <Card className={classes.container}>
             <div className="row center">
                <h5 className="title small">Balance Tracker</h5>
            </div>
            <CardContent>
                <Typography variant="h5" align="center">Total Balance</Typography>
                <Typography className={classes.subtitle}>
                    Try saying : Add Income for $1000 in Category Salary For Monday

                </Typography>
                <Typography className={classes.subtitle2}>
                    {segment && segment.words.map(w => w.value).join(" ")}
                </Typography>
                <Divider />
                <Form categories={categories} />
            </CardContent>
            <CardContent className={classes.bottomContent}>
                <Grid container spacint={2}>
                    <Grid item xs={12}>
                        <List transactions={transactions}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;
