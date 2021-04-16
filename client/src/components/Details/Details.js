import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from '../../useTransactions.js';

const Details = ({title}) => {
    const classes = useStyles();
    const { total, chartData } = useTransactions(title);

    const roundedTotal = Number(total).toFixed(2)

    const options = {
        legend: {
           labels: {
              fontColor: 'white'
           }
        }
    }
    console.log(chartData)
    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <div className="title__row">
                <h5 className="title small">{title}</h5>
                <h3>${roundedTotal}</h3>
            </div>
            <CardContent>
                <Doughnut data={chartData} options={options} />
            </CardContent>
        </Card>
    )
}

export default Details
