import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { USER_UPDATE_DONE } from '../actions/constants';
import { updateProfile } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import useStyles from './styles';


const Profile = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [confirmPassword, setConfirmPassword] = useState('');
    const userLogin = useSelector(state => state.userLogin);
    const { loading, userInfo, error } = userLogin;
    const userUpdate = useSelector(state => state.userUpdate);
    const { loading: updateLoading, success, error: updateError } = userUpdate;
    
    const [name, setName] = useState(userInfo && userInfo.name);
    const [email, setEmail] = useState(userInfo && userInfo.email);
    const [password, setPassword] = useState(userInfo && userInfo.password);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!password === confirmPassword) {
            alert("Password not matched. Please verify and try again.")
        } 
        dispatch(updateProfile({name, email, password}));
    };

    useEffect(() => {
        if (!userInfo) {
            props.history.push('/login');
        }

        if (success) {
            dispatch({ type: USER_UPDATE_DONE });
            alert('Profile updated successfully!');
            props.history.push('/');
        }
    }, [dispatch, props.history, userInfo, success]);

    return (
        <div className={classes.formContainer}>
            <form className={classes.formContent} onSubmit={submitHandler}>
                <input 
                    type="text" 
                    className={classes.formInput} 
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text" 
                    className={classes.formInput} 
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    className={classes.formInput} 
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type="password" 
                    className={classes.formInput} 
                    value={password}
                    placeholder="confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button className={classes.formButton} type="submit">update</button>
                {loading && <Loading />}
                {error && <Error>{error}</Error>}
                {success && <Error>Profile updated successfully!</Error>}
                {updateLoading && <Loading />}
                {updateError && <Error>{updateError}</Error>}
                <Link to="/login"><span className={classes.link}>login</span></Link>
            </form>
        </div>
    )
};

export default Profile;
