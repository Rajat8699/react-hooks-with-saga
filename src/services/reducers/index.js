import {combineReducers} from 'redux';
import auth from './auth';
import home from './home';
const reducer = combineReducers({
    auth,
    home
})
export default reducer;