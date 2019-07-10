import { createStore, combineReducers, compose } from 'redux'
import placeReducer from './reducers/places'

const rootReducer = combineReducers({
    places: placeReducer
});

let composeEnhancer = compose;

if (__DEV__) {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

}
const configureStore = () => {
    return createStore(rootReducer, composeEnhancer())
}

export default configureStore