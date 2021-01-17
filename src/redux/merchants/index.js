import axios from '../../settings/customAxios';

/* TYPES */
export const FETCH_MERCHANTS_PENDING = 'FETCH_MERCHANTS_PENDING';
export const FETCH_MERCHANTS_SUCCESS = 'FETCH_MERCHANTS_SUCCESS';
export const FETCH_MERCHANTS_FAILURE = 'FETCH_MERCHANTS_FAILURE';

/* ACTIONS */
export const fetchDataPending = () => ({
    type: FETCH_MERCHANTS_PENDING
});
export const fetchDataSuccess = (payload) => ({
    type: FETCH_MERCHANTS_SUCCESS,
    payload
});
export const fetchDataFailure = (payload) => ({
    type: FETCH_MERCHANTS_FAILURE,
    payload
});

export const fetchMerchants = () => async (dispatch) => {
    dispatch(fetchDataPending());

    try {
        axios.get('/merchants').then(({data: merchants}) => dispatch(fetchDataSuccess(merchants)));
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

export const merchantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MERCHANTS_SUCCESS:
            return {
                data: action.payload,
                error: null,
                loading: false
            };
        case FETCH_MERCHANTS_FAILURE:
            return {
                data: [],
                error: action.payload,
                loading: false
            };
        case FETCH_MERCHANTS_PENDING:
            return initialState;
        default:
            return state;
    }
};
