import { combineReducers } from 'redux';
import data from '@/store/reducers/data';
import router from '@/store/reducers/router';

const rootReducer = combineReducers({
    data,
		router
});
export default rootReducer
