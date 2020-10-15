/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import ActionTypes from '../../constants/ActionTypes';

const addHistoryState = {
    history: []
};

export const addHistory = (state = addHistoryState, action) => {
    switch (action.type) {
        case ActionTypes.GET_HISTORY:
            console.log('HISTORY are', action.payload);
            return {
                ...state,
                history: action.payload
            };

        default:
            return state;
    }
};
