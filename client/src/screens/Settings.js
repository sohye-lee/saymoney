import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategory } from '../actions/categoryActions';
import useStyles from './styles';


const Settings = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    // const userLogin = useSelector(state => state.userLogin);
    // const { userInfo } = userLogin;
    const userInfo = localStorage.getItem('userInfo');
    const categoryList = useSelector(state => state.categoryList);
    const { loading, categories, error } = categoryList;

    const deleteHandler = (category) => {

    }

    const renderCategory = (category) => {
        return (
            <li className={classes.formInput}>
                <h3 >{category.name}</h3>
                <button></button>
            </li>
        )
    }

    useEffect(() => {
        if (!userInfo) {
            alert('You need to login!');
            props.history.push('/login');
        }

        dispatch(listCategory());
        console.log(categories);
    }, [dispatch, props.history, userInfo]);

    return (
        <div className={classes.settingContainer}>
            <div className={classes.settingContent}>
                <h1 className="title">CATEGORY</h1>
                <ul>
                    {categories ? 
                    categories.length > 0 ? 
                    categories.map(category => renderCategory(category)) : 
                    <h4 style={{textAlign: "center", margin: "1rem auto", fontWeight: "100"}}>No Category. Please Add.</h4> : null}
                </ul>

            </div>
        </div>
    )
}

export default Settings;
