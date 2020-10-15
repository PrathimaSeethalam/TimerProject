/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import ActionTypes from '../../constants/ActionTypes';

export const getHistory = history => {
    return {
        type: ActionTypes.GET_HISTORY,
        payload: history
    };
};
