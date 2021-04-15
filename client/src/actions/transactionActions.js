import Axios from 'axios';
import { TRANSACTION_ADD_FAIL, TRANSACTION_ADD_REQUEST, TRANSACTION_ADD_SUCCESS, TRANSACTION_DELETE_FAIL, TRANSACTION_DELETE_REQUEST, TRANSACTION_DELETE_SUCCESS, TRANSACTION_LIST_FAIL, TRANSACTION_LIST_REQUEST, TRANSACTION_LIST_SUCCESS } from './constants';

const BASE_URL_TRANSACTION = 'http://localhost:5050/api/transactions'

export const listTransactions = () => async(dispatch, getState) => {
    const { userLogin: { userInfo }} = getState();
    dispatch({ type: TRANSACTION_LIST_REQUEST });

    try {
        const { data } = await Axios.get(`${BASE_URL_TRANSACTION}/private/${userInfo._id}`, {
            headers: { 
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({ type: TRANSACTION_LIST_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.message && error.response.data.message ?
            error.response.data.message :
            error.message;
        dispatch({ type: TRANSACTION_LIST_FAIL, payload: errorMessage});
    }
};

export const addTransaction = ({type, category, amount, description, date}) => async(dispatch, getState) => {
    const { userLogin: { userInfo } } = getState();
    dispatch({ type: TRANSACTION_ADD_REQUEST, payload: { user: userInfo._id, type, category, amount, description, date }});

    try {
        const { data } = await Axios.post(`${BASE_URL_TRANSACTION}/`, 
            { user: userInfo._id, type, category, amount, description, date },
            {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
        );
        dispatch({ type: TRANSACTION_ADD_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.message && error.response.data.message ?
            error.response.data.message :
            error.message;
        dispatch({ type: TRANSACTION_ADD_FAIL, payload: errorMessage });
    }
};

export const deleteTransaction = (transactionId) => async(dispatch, getState) => {
    const { userLogin: { userInfo } } = getState();
    dispatch({ type: TRANSACTION_DELETE_REQUEST });

    try {
        const { data } = await Axios.delete(`${BASE_URL_TRANSACTION}/${transactionId}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({ type: TRANSACTION_DELETE_SUCCESS, paylaod: data });
    } catch (error) {
        const errorMessage = error.message && error.response.data.message ?
            error.response.data.message :
            error.message;
        dispatch({ type: TRANSACTION_DELETE_FAIL, payload: errorMessage });
    }
}