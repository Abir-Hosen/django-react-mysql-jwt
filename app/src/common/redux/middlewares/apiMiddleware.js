import axios from 'axios';
import store from '../index'
import { apiBaseURL } from '../../../settings';

export const apiMiddleware = () => (next) => (action) => {

    next(action);
    const baseUrl = `${apiBaseURL.v1}`;

    const { api, file, successMessage, errorMessage, reducerData } = action.meta || {};
    const { path, mockPath, method = 'GET', data } = action.payload || {};

    if (!api) {
        return;
    }

    if (api && !path) {
        throw new Error(`'path' not specified for api action ${action.type}`);
    }
    const url = mockPath ? mockPath : baseUrl + path;

    const header = {
        headers: { 'Content-Type': 'multipart/form-data' },
    }

    let requestObject;

    if (file) {
        requestObject = {
            method,
            url,
            data,
            header
        }
    } else {
        requestObject = {
            method,
            url,
            data
        }
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${store.getState().authInfo.logger.access}`

    return axios(requestObject)
        .then((res) => {
            next({
                type: `${action.type}_SUCCESS`,
                payload: res.data,
                meta: action.meta,
            });
        })
        .catch((error) => {

            next({
                type: `${action.type}_FAILED`,
                meta: action.meta,
            });
        });
};