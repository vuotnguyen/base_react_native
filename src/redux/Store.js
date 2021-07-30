import { applyMiddleware, createStore } from 'redux';
import indexReducer from './reducer/Index';
import thunk from 'redux-thunk';

const Store = createStore(indexReducer, applyMiddleware(thunk));
export default Store;