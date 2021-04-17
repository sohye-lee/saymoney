/* eslint-disable no-fallthrough */
import React, { useEffect, useState } from 'react';
import { 
    FormControl, TextField, Grid, Button, InputLabel, Select, MenuItem, Input 
} from '@material-ui/core';
import { useSpeechContext } from '@speechly/react-client';
import useStyles from  './styles';
import { addTransaction } from '../actions/transactionActions';
import { useDispatch } from 'react-redux';

const Form = ({categories}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { segment } = useSpeechContext();

    const renderCategory = (category) => (
        <MenuItem value={category._id} key={category._id}>{category.name}</MenuItem>
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

    const findCategory = (name) => {
        if (categories) {
            const categoryFound = categories.filter(c => c.name.toLowerCase()===name.toLowerCase())[0];
            if (categoryFound) {
                return categoryFound._id;
            }
        }
    }


    useEffect(() => {
        if (segment) {
            if (segment.intent.intent === 'add_expense') {
                setType('Expense');
            } else if (segment.intent.intent === 'add_income') {
                setType('Income');
            } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
                return submitHandler();
            } else if (segment.isFinal && segment.intent.intent === 'cancel_transcation') {
                return resetHandler();
            }

            segment.entities.forEach(e => {
                
                switch(e.type) {
                    case 'amount':
                        setAmount(e.value);
                    // eslint-disable-next-line no-fallthrough
                    case 'category':
                        const categoryId = findCategory(e.value);
                        if (categoryId) {
                            setCategory(categoryId);
                        }
                    case 'date':
                        setDate(e.value);
                    default:
                        break;
                }
            })

            if(segment.isFinal && amount && date) {
                submitHandler();
            }
        }


    }, [segment])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
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
                <TextField type="number" label={amount? " " : 'Amount'} value={amount} fullWidth onChange={e => setAmount(e.target.value)}/>
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
