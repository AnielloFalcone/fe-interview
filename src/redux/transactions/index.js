import axios from '../../settings/customAxios';

/* TYPES */
export const FETCH_TRANSACTIONS_PENDING = 'FETCH_TRANSACTIONS_PENDING';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_FAILURE = 'FETCH_TRANSACTIONS_FAILURE';

/* ACTIONS */
export const fetchDataPending = () => ({
    type: FETCH_TRANSACTIONS_PENDING
});
export const fetchDataSuccess = (payload) => ({
    type: FETCH_TRANSACTIONS_SUCCESS,
    payload
});
export const fetchDataFailure = (payload) => ({
    type: FETCH_TRANSACTIONS_FAILURE,
    payload
});

export const fetchTransactions = () => async (dispatch) => {
    dispatch(fetchDataPending());

    try {
        axios.get('/merchants')
            .then(({data: transactions}) => dispatch(fetchDataSuccess(transactions)));
    } catch (error) {
        dispatch(fetchDataFailure(error));
    }
};

/* REDUCERS */
const initialState = {
    data: [],
    error: null,
    loading: true
};

export const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRANSACTIONS_SUCCESS:
            return {
                data: action.payload,
                error: null,
                loading: false
            };
        case FETCH_TRANSACTIONS_FAILURE:
            return {
                data: [],
                error: action.payload,
                loading: false
            };
        case FETCH_TRANSACTIONS_PENDING:
            return initialState;
        default:
            return state;
    }
};
