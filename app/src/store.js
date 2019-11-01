import { createStore } from 'redux';
import citiesReducer from './reducers/citiesReducer';

function configureStore() {
    return createStore(
        citiesReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

export default configureStore;