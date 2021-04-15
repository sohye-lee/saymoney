import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Delete, Edit, Check } from '@material-ui/icons';
import { addCategory, deleteCategory, editCategory, listCategory } from '../actions/categoryActions';
import useStyles from './styles';
import Loading from '../components/Loading';
import Error from '../components/Error';



const Settings = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const categoryList = useSelector(state => state.categoryList);
    const { loading, categories, error } = categoryList;
    const categoryAdd = useSelector(state => state.categoryAdd);
    const { loading: addLoading, success: addSuccess, error: addError} = categoryAdd;
    const categoryDelete = useSelector(state => state.categoryDelete);
    const { loading: deleteLoading, success: deleteSuccess, error: deleteError } = categoryDelete;
    const categoryEdit = useSelector(state => state.categoryEdit);
    const { loading: editLoading, success: editSuccess, error: editError } = categoryEdit;

    const [name, setName] = useState('');

    const addHandler = () => {
        dispatch(addCategory("new category"));
    }

    const deleteHandler = (categoryId) => {
        dispatch(deleteCategory(categoryId));
    }

    const editHandler = (category) => {
        dispatch(editCategory(category, name));
    }

    const openEditInput = (id) => {
        const inputToOpen = document.getElementById(id);
        inputToOpen.style.display = 'flex';
    }

    const closeEditInput = (id) => {
        const inputToClose = document.getElementById(id);
        inputToClose.style.display = 'none';
    }

    const renderCategory = (category) => {
        return (
            <li className={classes.settingList}>
                <div className={classes.settingItem}>
                    {category.name === "new category" ?
                    <h3 style={{color: "var(--Green)"}}>{category.name}</h3> :
                    <h3 >{category.name}</h3>}
                    <div className="row right">
                        <button
                            className={classes.editButton}
                            onClick={() => {
                                openEditInput(category._id); 
                                setName(category.name);}}
                        >
                            <Edit />
                        </button>
                        <button
                            className={classes.deleteButton}
                            onClick={() => deleteHandler(category._id)}
                        >
                            <Delete />
                        </button>
                    </div>
                </div>
                {deleteLoading && <Loading />}
                {deleteError && <Error>{deleteError}</Error>}
                {editLoading && <Loading />}
                {editError && <Error>{editError}</Error>}
                <div className={classes.settingItem} id={category._id} style={{display: "none"}}>
                    <input 
                        className={classes.settingInput} 
                        placeholder={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="row right">
                        <button
                            className={classes.editButton}
                            onClick={() => {
                                editHandler(category);
                                closeEditInput(category._id);}}
                        >
                            <Check />
                        </button>
                        <button 
                            className={classes.deleteButton} 
                            onClick={() => closeEditInput(category._id)}
                        > 
                            X 
                        </button>
                    </div>
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
    }, [dispatch, props.history, userInfo, deleteSuccess, editSuccess, addSuccess]);

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
            <Link to="/" style={{textDecoration: "none"}}>Back to Main</Link>
        </div>
    )
}

export default Settings;
