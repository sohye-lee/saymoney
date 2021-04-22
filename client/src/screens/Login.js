import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions';
import useStyles from './styles';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Login = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userLogin = useSelector(state => state.userLogin);
    const { loading, userInfo, error } = userLogin;
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    useEffect(() => {
        if (userInfo) {
            props.history.push('/');
        }
    }, [dispatch, props.history, userInfo]);

    return (
        <div className={classes.formContainer}>
            <form className={classes.formContent} onSubmit={submitHandler}>
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
                <button className={classes.formButton} type="submit">login</button>
                {loading && <Loading />}
                {error && <Error>{error}</Error>}
                <Link to="/signup"><span className={classes.link}>sign up</span></Link>
            </form>
        </div>
    )
};

export default Login;
