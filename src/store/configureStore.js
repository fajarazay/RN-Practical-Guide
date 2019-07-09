import { createStore, combineReducers } from 'redux'
import placeReducer from './actions/places'

const rootReducer = combineReducers({
    places: placeReducer
});

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore