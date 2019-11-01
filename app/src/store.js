import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

function configureStore() {
    return createStore(
        citiesReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

export default configureStore;