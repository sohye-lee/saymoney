import Axios from 'axios';
import { CATEGORY_ADD_FAIL, CATEGORY_ADD_REQUEST, CATEGORY_ADD_SUCCESS, CATEGORY_DELETE_FAIL, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_EDIT_FAIL, CATEGORY_EDIT_REQUEST, CATEGORY_EDIT_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from './constants';


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

export const editCategory = (category, name) => async (dispatch, getState) => {
    dispatch({ type: CATEGORY_EDIT_REQUEST, payload: { name }});
    const { userLogin: { userInfo } } = getState();

    try {
        const { data } = await Axios.put(`${BASE_URL_CATEGORY}/${category._id}`, { name }, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({ type: CATEGORY_EDIT_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.response && error.response.data.message ?
            error.response.data.message :
            error.message;
        dispatch({ type: CATEGORY_EDIT_FAIL, payload: errorMessage });
    }
};

export const deleteCategory = (categoryId) => async (dispatch, getState) => {
    dispatch({ type: CATEGORY_DELETE_REQUEST, payload: categoryId });
    const { userLogin: { userInfo } } = getState();

    try {
        const { data } = await Axios.delete(`${BASE_URL_CATEGORY}/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.message && error.response.data.message ?
            error.response.data.message :
            error.message;
        dispatch({ type: CATEGORY_DELETE_FAIL, payload: errorMessage }); 
    }
}