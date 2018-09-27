import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/indexReducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initailState){
    const store = createStoreWithMiddleware(rootReducer,initailState); //createStore(parm1, parm2) reducer + 默认状态初始值
    return store;
}