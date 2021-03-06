import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { authReducer } from "../reducers/authReducer";
import { characterReducer } from "../reducers/characterReducer";
import { modalReducer } from "../reducers/modalReducer";
import { searchCharacterReducer } from "../reducers/searchCharacterReducer";
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    modal: modalReducer,
    character: characterReducer,
    searchCharacter: searchCharacterReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)