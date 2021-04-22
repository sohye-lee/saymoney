import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { categoryAddReducer, categoryDeleteReducer, categoryEditReducer, categoryListReducer } from './reducers/categoryReducers';
import { transactionAddReducer, transactionDeleteReducer, transactionEditReducer, transactionListReducer } from './reducers/transactionReducers';
import { userLoginReducer, userSignupReducer, userUpdateReducer } from './reducers/userReducers';

const initialState = {
    userLogin: {
        userInfo: localStorage.getItem('userInfo') 
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    }
};

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    userUpdate: userUpdateReducer,
    categoryList: categoryListReducer,
    categoryAdd: categoryAddReducer,
    categoryDelete: categoryDeleteReducer,
    categoryEdit: categoryEditReducer,
    transactionList: transactionListReducer,
    transactionAdd: transactionAddReducer,
    transactionDelete: transactionDeleteReducer,
    transactionEdit: transactionEditReducer,

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;