import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer'; // Example reducer
// import other reducers here

const rootReducer = combineReducers({
    auth: authReducer,
    // other reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;