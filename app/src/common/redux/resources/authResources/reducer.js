import produce from 'immer';
import { userLogin } from '.';
import * as types from './types';

const authInfoState = {
    logger: {},
    msg: '',
}

export const authInfo = (state = authInfoState, action) => {
    const { type, payload, meta } = action;
    return produce(state, (draft) => {
        switch (type) {

            case types.SAVE_USER_INFO:
                break;
            case types.SAVE_USER_INFO_SUCCESS:
                draft.msg = meta.successMessage
                break;
            case types.SAVE_USER_INFO_FAILED:
                draft.msg = meta.errorMessage
                break;

            case types.USER_LOGIN:
                break;
            case types.USER_LOGIN_SUCCESS:
                draft.logger = payload
                draft.msg = meta.successMessage
                break;
            case types.USER_LOGIN_FAILED:
                draft.msg = meta.errorMessage
                break;

            case types.CHECK_REFRESH:
                break;
            case types.CHECK_REFRESH_SUCCESS:
                console.log(payload)
                // draft.logger = payload
                draft.msg = meta.successMessage
                break;
            case types.CHECK_REFRESH_FAILED:
                // draft.logger = {}
                draft.msg = meta.errorMessage
                break;

            case types.SET_MSG:
                draft.msg = payload
                break;
            default:
                return state;

        }
    });
}