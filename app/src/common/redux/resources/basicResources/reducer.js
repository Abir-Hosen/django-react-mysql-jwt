import produce from 'immer';
import _ from 'lodash'
import * as types from './types';

const basicDataState = {
    userList: [],
    fileData: [],
}

export const basicData = (state = basicDataState, action) => {
    const { type, payload, successMessage, errorMessage, meta } = action;
    return produce(state, (draft) => {
        switch (type) {

            case types.FETCH_USERS:
                console.log('fetch user')
                break;
            case types.FETCH_USERS_SUCCESS:
                draft.userList = payload
                console.log('fetch user success', payload)
                break;
            case types.FETCH_USERS_FAILED:
                draft.userList = []
                console.log('fetch user failed', meta)
                break;

            case types.FETCH_FILE_DATA:
                console.log('fetch filedata')
                break;
            case types.FETCH_FILE_DATA_SUCCESS:
                draft.fileData = payload
                console.log('fetch filedata success', payload)
                break;
            case types.FETCH_FILE_DATA_FAILED:
                draft.fileData = []
                console.log('fetch filedata failed', meta)
                break;

            default:
                return state;
        }
    });
}



