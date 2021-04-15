import React, { useEffect } from 'react';
import Main from '../components/Main/Main';
import Details from '../components/Details/Details';
import { useDispatch, useSelector } from 'react-redux';
import { listCategory } from '../actions/categoryActions';
import { listTransactions } from '../actions/transactionActions';


const Home = (props) => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const categoryList = useSelector(state => state.categoryList);
    const { categories } = categoryList;
    const transactionList = useSelector(state => state.transactionList);
    const { transactions } = transactionList;
    const transactionAdd = useSelector(state => state.transactionAdd);
    const { success: successAdd } = transactionAdd;
    const transactionDelete = useSelector(state => state.transactionDelete);
    const { success: successDelete } = transactionDelete;

    useEffect(() => {
        if (!userInfo) {
            props.history.push('/login');
        }
        dispatch(listCategory());
        dispatch(listTransactions());
    }, [props.history, userInfo, successAdd, successDelete])
    
    return (
        <div className="home__container">
            <div className="home__grid">
                <div className="home__item main">
                    <Main categories={categories} transactions={transactions} />
                </div>
                <div className="home__item details">
                    <div className="details__item">
                        <Details title="Income"/>
                    </div>
                    <div className="details__item">
                        <Details title="Expense"/>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Home;
