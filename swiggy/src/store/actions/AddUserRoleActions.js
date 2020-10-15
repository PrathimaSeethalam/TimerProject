/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import ActionTypes from '../../constants/ActionTypes';

export const userName = userName => {
    return {
        type: ActionTypes.ENTER_USER_NAME,
        payload: userName
    };
};

export function userPassword(userPassword) {
    return {
        type: ActionTypes.ENTER_USER_PASSWORD,
        payload: userPassword
    };
}

export const reportUserRepeatPassword = reportUserRepeatPassword => {
    return {
        type: ActionTypes.ENTER_REPEAT_USER_PASSWORD,
        payload: reportUserRepeatPassword
    };
};
export const userRole = userRole => {
    return {
        type: ActionTypes.ENTER_USER_ROLE,
        payload: userRole
    };
};

export const addUserData = (key, value) => {
    return {
        type: ActionTypes.ADD_USER_ALL_DATA,
        payload: { key, value }
    };
};

export const resetUser = () => {
    return {
        type: ActionTypes.USER_RESET
    };
};
