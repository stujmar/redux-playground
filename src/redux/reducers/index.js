import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses: courses // could use object shorthand syntax
});

export default rootReducer;