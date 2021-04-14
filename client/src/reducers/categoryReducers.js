import { 
    CATEGORY_ADD_FAIL, CATEGORY_ADD_REQUEST, CATEGORY_ADD_SUCCESS, 
    CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS 
} from "../actions/constants";

export const categoryListReducer = (state = {}, action) => {
    switch(action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true };
        case CATEGORY_LIST_SUCCESS:
            return { loading: false, categories: action.payload };
        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const categoryAddReducer = (state = {}, action) => {
    switch(action.type) {
        case CATEGORY_ADD_REQUEST:
            return { loading: true };
        case CATEGORY_ADD_SUCCESS:
            return { loading: false, category: action.payload };
        case CATEGORY_ADD_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
};