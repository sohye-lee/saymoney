import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, Edit } from '@material-ui/icons';
import { addCategory, listCategory } from '../actions/categoryActions';
import useStyles from './styles';
import Loading from '../components/Loading';
import Error from '../components/Error';



const Settings = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    // const userInfo = localStorage.getItem('userInfo');
    const categoryList = useSelector(state => state.categoryList);
    const { loading, categories, error } = categoryList;

    const addHandler = () => {
        dispatch(addCategory("new category"));
    }

    const deleteHandler = (category) => {

    }

    const editHandler = (category) => {

    }

    const renderCategory = (category) => {
        return (
            <li className={classes.settingItem}>
                <h3 >{category.name}</h3>
                <div className="row right">
                    <button
                        className={classes.editButton}
                        onClick={() => editHandler(category)}
                    >
                        <Edit />
                    </button>
                    <button
                        className={classes.deleteButton}
                        onClick={() => deleteHandler(category)}
                    >
                        <Delete />
                    </button>
                </div>
                
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
                <div className="row right">
                    <button 
                        className={classes.settingButton}
                        onClick={addHandler}
                    >
                        +
                    </button>
                </div>
                <ul>
                    {loading && <Loading />}
                    {error && <Error>{error}</Error>}
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
