import Axios from 'axios';
import { 
    USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, 
    USER_LOGOUT, 
    USER_SIGNUP_REQUEST, 
    USER_SIGNUP_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_SUCCESS
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

export const updateProfile = (user) => async(dispatch, getState) => {
    const { userLogin: { userInfo } } = getState();
    dispatch({ type: USER_UPDATE_SUCCESS, payload: user});

    try {
        const { data } = await Axios.put(`${BASE_URL_USER}/${userInfo._id}`, user, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
    }
};