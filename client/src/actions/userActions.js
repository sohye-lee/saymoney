import Axios from 'axios';
import { 
    USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, 
    USER_LOGOUT, 
    USER_SIGNUP_REQUEST, 
    USER_SIGNUP_SUCCESS
} from './constants';

const BASE_URL_USER = "/api/users";

export const login = (email, password) => async(dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password }});

    try {
        const { data } = await Axios.post(`${BASE_URL_USER}/login`, { email, password });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data }); 
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        const errorMessage = error.response && error.response.data.message ? 
            error.response.data.message : 
            error.message;
        dispatch({ type: USER_LOGIN_FAIL, payload: errorMessage });
    }
};

export const signup = (name, email, password) => async(dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST, payload: { name, email, password }});

    try {
        const { data } = await Axios.post(`${BASE_URL_USER}/signup`, { name, email, password});
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        const errorMessage = error.response && error.response.data.message ? 
            error.response.data.message : 
            error.message;
         dispatch({ type: USER_LOGIN_FAIL, payload: errorMessage });
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
};