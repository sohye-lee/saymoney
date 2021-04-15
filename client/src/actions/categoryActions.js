import Axios from 'axios';
import { CATEGORY_ADD_FAIL, CATEGORY_ADD_REQUEST, CATEGORY_ADD_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from './constants';


const BASE_URL_CATEGORY = "http://localhost:5050/api/categories";

export const listCategory = () => async(dispatch, getState) => {
    const { userLogin: { userInfo } } = getState();
    dispatch({ type: CATEGORY_LIST_REQUEST });
    try {
        const { data } = await Axios.get(`${BASE_URL_CATEGORY}/private/${userInfo._id}`);
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.response && error.response.data.message ?
            error.response.data.message :
            error.message;
        dispatch({ type: CATEGORY_LIST_FAIL, payload: errorMessage });
    }
};

export const addCategory = (name) => async (dispatch, getState) => {
    const { userLogin: { userInfo } } = getState();
    dispatch({ type: CATEGORY_ADD_REQUEST, payload: { user: userInfo._id, name } });

    try {
        const { data } = await Axios.post(BASE_URL_CATEGORY, { user: userInfo._id, name }); 
        dispatch({ type: CATEGORY_ADD_SUCCESS, payload: data })
    } catch (error) {
        const errorMessage = error.response && error.response.data.message ? 
            error.response.data.message : 
            error.message;
        dispatch({ type: CATEGORY_ADD_FAIL, payload: errorMessage });
    }
};