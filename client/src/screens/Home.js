import React, { useEffect, useRef, useState } from 'react';
import Main from '../components/Main/Main';
import Details from '../components/Details/Details';
import { useDispatch, useSelector } from 'react-redux';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import { listCategory } from '../actions/categoryActions';
import { listTransactions } from '../actions/transactionActions';
import SnackbarAlert from '../components/Snackbar';
import useStyles from './styles';
import { SpeechState, useSpeechContext } from '@speechly/react-client';


const Home = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
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
    const [open, setOpen] = useState(false);

    const { speechState } = useSpeechContext();
    const main = useRef(null)

    const executeScroll = () => Main.current.scrollIntoView();

    useEffect(() => {
        if (!userInfo) {
            props.history.push('/login');
        }
        dispatch(listCategory());
        dispatch(listTransactions());
        if (successAdd) {
            setOpen(true)
        }
        if(speechState === SpeechState.Recording) {
            executeScroll();
        }
    }, [props.history, userInfo, successAdd, successDelete, dispatch])
    
    return (
        <div className="home__container">
            <div className={classes.snackbar}>
                <SnackbarAlert open={open} setOpen={setOpen} />
            </div>
            <div className="home__grid">
                <div className="home__item main">
                    <Main ref={main} categories={categories} transactions={transactions} />
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
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>
        </div>
    )
}

export default Home;
