import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { useSpeechContext } from '@speechly/react-client';
import useStyles from './styles';
import Form from '../Form';
import List from '../List';
import Info from '../Info';

const Main = ({categories, transactions}) => {
    const classes = useStyles();
    const { segment } = useSpeechContext();
    
    const getBalance = () => {
        if (transactions) {
            const incomes = transactions.filter(t => t.type === 'Income');
            const incomeAmount = incomes.reduce((a,b) => a+b.amount, 0);
            const expenses = transactions.filter(t => t.type === 'Expense');
            const expenseAmount = expenses.reduce((a,b) => a+b.amount, 0);
    
            return (incomeAmount - expenseAmount).toFixed(2);
        }
    }

    return (
        <Card className={classes.container}>
             <div className="row center">
                <h5 className="title small">Balance Tracker</h5>
            </div>
            <CardContent>
                <Typography variant="h5" align="center">Total Balance : ${getBalance()}</Typography>
                <Typography className={classes.subtitle}>
                    <Info />
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
