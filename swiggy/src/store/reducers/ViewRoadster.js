/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import ActionTypes from '../../constants/ActionTypes';

const addRoadsterState = {
    roadster: []
};

export const addRoadster = (state = addRoadsterState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ROADSTER:
            console.log('ROADSTER are', action.payload);
            return {
                ...state,
                roadster: action.payload
            };

        default:
            return state;
    }
};
