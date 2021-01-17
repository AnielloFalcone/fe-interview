import axios from 'axios';
import {APIConstants} from '../shared/constants';

export default axios.create({
    withCredentials: true,
    headers: {
        common: {
            Accept: 'application/json'
        }
    },
    baseURL: APIConstants.base
});
