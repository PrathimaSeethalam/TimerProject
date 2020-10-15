/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import { combineReducers } from 'redux';

import { addUser } from './AddUserRole';
import { addCapsules } from './ViewCapsules';
import { addHistory } from './ViewHistory';
import { addRoadster } from './ViewRoadster';

export default combineReducers({
    addUser: addUser,
    addCapsules: addCapsules,
    addHistory: addHistory,
    addRoadster: addRoadster
});
