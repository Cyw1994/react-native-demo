import { combineReducers } from 'redux';

import Login from './loginReducer';
import Counter from './counterReducer';

const rootReducer = combineReducers({
    login:Login,
    counter:Counter
})

export default rootReducer;