/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */

import ActionTypes from '../../constants/ActionTypes';

const addUserState = {
    userName: '',
    userPassword: '',
    userRepeatPassword: '',
    userRole: ''
};

export const addUser = (state = addUserState, action) => {
    switch (action.type) {
        case ActionTypes.ENTER_USER_NAME:
            console.log('username is', action.payload);
            return {
                ...state,
                userName: action.payload
            };

        case ActionTypes.ENTER_USER_PASSWORD:
            return {
                ...state,
                userPassword: action.payload
            };

        case ActionTypes.ENTER_USER_REPEAT_PASSWORD:
            return {
                ...state,
                userRepeatPassword: action.payload
            };

        case ActionTypes.ADD_USER_ALL_DATA:
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };

        case ActionTypes.USER_RESET:
            return {
                ...state,
                userName: ' ',
                userPassword: ' ',
                userRepeatPassword: ' '
                // userRole: false
            };

        case ActionTypes.ENTER_USER_ROLE:
            return {
                ...state,
                userRole: action.payload
            };
        default:
            return state;
    }
};
