import React from 'react';
import { 
    List as MUIList, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    Avatar, 
    ListItemSecondaryAction, 
    IconButton, 
    Slide  
} from '@material-ui/core';
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from './styles';
import { GetDate } from './GetDate.js';

const List = () => {
    const classes = useStyles();

    const transactions = [
        { id: 1, type: "Income", category: "Salary", amount: 1500, date: GetDate(new Date())},
        { id: 2, type: "Expense", category: "Grocery", amount: 89.3, date: GetDate(new Date())},
        { id: 3, type: "Income", category: "Business", amount: 560, date: GetDate(new Date())},
        { id: 4, type: "Income", category: "Salary", amount: 1500, date: GetDate(new Date())},
        { id: 5, type: "Expense", category: "Grocery", amount: 89.3, date: GetDate(new Date())},
        { id: 6, type: "Income", category: "Business", amount: 560, date: GetDate(new Date())},
    ];

    return (
        <MUIList dense={false} className={classes.mainList}>
            {transactions.map(transaction => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar 
                                className={transaction.type === 'Income' 
                                ? classes.avatarIncome : classes.avatarExpense}>
                                    <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
};

export default List;
