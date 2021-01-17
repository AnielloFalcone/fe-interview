import axios from '../../settings/customAxios';
import {Merchant} from "../../shared/types";

type Action = {
    payload: Merchant & Array<Merchant>,
    type: string
}

/* TYPES */
export const FETCH_MERCHANTS_FAILURE = 'FETCH_MERCHANTS_FAILURE';
export const FETCH_MERCHANTS_PENDING = 'FETCH_MERCHANTS_PENDING';
export const FETCH_MERCHANTS_SUCCESS = 'FETCH_MERCHANTS_SUCCESS';

export const PATCH_MERCHANTS_FAILURE = 'PATCH_MERCHANTS_FAILURE';
export const PATCH_MERCHANTS_PENDING = 'PATCH_MERCHANTS_PENDING';
export const PATCH_MERCHANTS_SUCCESS = 'PATCH_MERCHANTS_SUCCESS';

/* ACTIONS */
export const fetchDataPending = () => ({
    type: FETCH_MERCHANTS_PENDING
});
export const fetchDataSuccess = (payload: Array<Merchant>) => ({
    type: FETCH_MERCHANTS_SUCCESS,
    payload
});
export const fetchDataFailure = (payload: string) => ({
    type: FETCH_MERCHANTS_FAILURE,
    payload
});

export const patchDataPending = () => ({
    type: PATCH_MERCHANTS_PENDING
});
export const patchDataSuccess = (payload: Merchant) => ({
    type: PATCH_MERCHANTS_SUCCESS,
    payload
});
export const patchDataFailure = (payload: string) => ({
    type: PATCH_MERCHANTS_FAILURE,
    payload
});

export const fetchMerchants = () => async (dispatch: Function) => {
    dispatch(fetchDataPending());

    try {
        axios.get('/merchants').then(({data: merchants}) => dispatch(fetchDataSuccess(merchants)));
    } catch (error) {
        dispatch(fetchDataFailure(error));
    }
};
export const patchMerchant = (id: string, isBill: boolean) => async (dispatch: Function) => {
    dispatch(patchDataPending());

    try {
        axios.patch(`/merchants/${id}`, {isBill: !isBill}).then(({data: merchant}) => dispatch(patchDataSuccess(merchant)));
    } catch (error) {
        dispatch(patchDataFailure(error));
    }
};

/* REDUCERS */
const initialState = {
    bills: [],
    data: [],
    error: null,
    loading: true,
    transactions: [],
};

export const merchantsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case PATCH_MERCHANTS_SUCCESS:
            console.log('state => ', state);
            const newData = state.data.map((m: Merchant) => {
                if (m.id === action.payload.id) {
                    m.isBill = action.payload.isBill
                }

                return m;
            });
            const newBills = newData.filter((m: Merchant) => m.isBill);
            const newTransactions = newData.filter((t: Merchant) => !t.isBill);

            return {
                bills: newBills,
                data: newData,
                error: null,
                loading: false,
                transactions: newTransactions
            };
        case FETCH_MERCHANTS_SUCCESS:
            const bills = action.payload.filter((m: Merchant) => m.isBill);
            const transactions = action.payload.filter((t: Merchant) => !t.isBill);

            return {
                bills,
                data: action.payload,
                error: null,
                loading: false,
                transactions
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
