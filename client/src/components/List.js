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
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../actions/transactionActions';

const List = ({transactions}) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const deleteHandler = (category) => {
        dispatch(deleteTransaction(category._id));
    };

    return (
        <MUIList dense={false} className={classes.mainList}>
            {transactions && transactions.length > 0 ? 
            transactions.map(transaction => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction._id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar 
                                className={transaction.type === 'Income' 
                                ? classes.avatarIncome : classes.avatarExpense}>
                                    <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={`${transaction.category.name} - $${transaction.amount}`} secondary={`${transaction.date.slice(0,10)} - ${transaction.description}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteHandler(transaction)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))
            : <h5>No Record found</h5>}
        </MUIList>
    )
};

export default List;
