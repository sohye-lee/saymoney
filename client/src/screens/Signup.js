import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCategory } from '../actions/categoryActions';
import { signup } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import useStyles from './styles';


const Signup = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const userLogin = useSelector(state => state.userLogin);
    const { loading, userInfo, error } = userLogin;
    const userSignup = useSelector(state => state.userSignup);
    const { success } = userSignup;
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (!password === confirmPassword) {
            alert("Password not matched. Please verify and try again.")
        } 
        dispatch(signup(name, email, password));

    };

    const seedCategories = () => {
        const categoryNames = [
            "Business",
            "Salary",
            "Food",
            "House",
            "Travel",
            "Clothes",
            "Shopping",
            "Investments",
            "Entertainment",
            "Phone",
            "Utilities",
            "Medical",
            "Insurance",
            "Others",
            "Pets",
            "Children",
            "Car",
            "Transportation",
            "Bills",
            "Deposites",
            "Extra Income", 
             "Rental Income", 
            "Savings",
            "Gifts",
            "Lottery",
            "Study",
            "Self Development",
            "Tax",
            "Health",
        ]
    
        const seed = (name) => {
            return dispatch(addCategory(name));
        }
        return categoryNames.map(c => seed(c));
    };

    useEffect(() => {
        if (userInfo) {
            props.history.push('/');
        }
        if (success) {
            seedCategories();
        }
    }, [dispatch, props.history, userInfo, success]);

    return (
        <div className={classes.formContainer}>
            <form className={classes.formContent} onSubmit={submitHandler}>
                <input 
                    type="text" 
                    className={classes.formInput} 
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text" 
                    className={classes.formInput} 
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    className={classes.formInput} 
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type="password" 
                    className={classes.formInput} 
                    placeholder="confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button className={classes.formButton} type="submit">sign up</button>
                {loading && <Loading />}
                {error && <Error />}
                <Link to="/login"><span className={classes.link}>login</span></Link>
            </form>
        </div>
    )
};

export default Signup;
