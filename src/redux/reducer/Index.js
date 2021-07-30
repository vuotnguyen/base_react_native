import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

const indexReducer = combineReducers({
    login: LoginReducer
})
export default indexReducer;