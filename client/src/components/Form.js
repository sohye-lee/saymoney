import React, { useState } from 'react';
import { 
    FormControl, TextField, Typography, Grid, Button, InputLabel, Select, MenuItem, Input 
} from '@material-ui/core';
import useStyles from  './styles';
import { addTransaction } from '../actions/transactionActions';
import { useDispatch } from 'react-redux';

const Form = ({categories}) => {
    // const [item, setItem] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();
    const renderCategory = (category) => (
        <MenuItem value={category._id}>{category.name}</MenuItem>
    );

    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState();
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const resetHandler = () => {
        setType('');
        setCategory('');
        setAmount();
        setDate('');
        setDescription('');
    }
    
    const submitHandler = () => {
        dispatch(addTransaction({type, category, amount, date, description}));
        resetHandler();
    }


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={type} onChange={e => setType(e.target.value)}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={category} onChange={e=> setCategory(e.target.value)}>
                        {categories && categories.map(cat => renderCategory(cat))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" value={amount} fullWidth onChange={e => setAmount(e.target.value)}/>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label=" " value={date} fullWidth onChange={e => setDate(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <Input type="text" placeholder="description" value={description} onChange={e => setDescription(e.target.value)} fullWidth/>
            </Grid>
            <Button className={classes.buttonLong} fullWidth variant="contained" onClick={submitHandler}>Create</Button>
        </Grid>
    )
}

export default Form;
