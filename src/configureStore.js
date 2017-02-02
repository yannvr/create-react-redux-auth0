import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import {persistStore, autoRehydrate} from 'redux-persist'

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore (preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            ),
            autoRehydrate()
        )
    )
    persistStore(store)
    return store
}
