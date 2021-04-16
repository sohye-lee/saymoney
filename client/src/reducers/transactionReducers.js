import { 
    TRANSACTION_ADD_FAIL, TRANSACTION_ADD_REQUEST, TRANSACTION_ADD_SUCCESS, 
    TRANSACTION_DELETE_FAIL, TRANSACTION_DELETE_REQUEST, TRANSACTION_DELETE_SUCCESS, 
    TRANSACTION_EDIT_FAIL, 
    TRANSACTION_EDIT_REQUEST, 
    TRANSACTION_EDIT_SUCCESS, 
    TRANSACTION_LIST_FAIL, TRANSACTION_LIST_REQUEST, TRANSACTION_LIST_SUCCESS 
} from "../actions/constants";

export const transactionListReducer = (state = {}, action) => {
    switch(action.type) {
        case TRANSACTION_LIST_REQUEST:
            return { loading: true };
        case TRANSACTION_LIST_SUCCESS:
            return { loading: false, transactions: action.payload };
        case TRANSACTION_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const transactionAddReducer = (state = {}, action) => {
    switch(action.type) {
        case TRANSACTION_ADD_REQUEST:
            return { loading: true };
        case TRANSACTION_ADD_SUCCESS:
            return { loading: false, success: true };
        case TRANSACTION_ADD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const transactionDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case TRANSACTION_DELETE_REQUEST:
            return { loading: true };
        case TRANSACTION_DELETE_SUCCESS:
            return { loading: false, success: true };
        case TRANSACTION_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const transactionEditReducer = (state = {}, action) => {
    switch(action.type) {
        case TRANSACTION_EDIT_REQUEST:
            return { loading: true };
        case TRANSACTION_EDIT_SUCCESS:
            return { loading: false, success: true, transaction: action.payload };
        case TRANSACTION_EDIT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}