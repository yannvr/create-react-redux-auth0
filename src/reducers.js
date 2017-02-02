import { combineReducers } from 'redux'
// import ... from './actions'


function isLoggedIn (state = false, action) {
    switch (action.type) {
        /*    case REHYDRATE:
         delete action.payload.stockDataSets
         return Object.assign({}, state, action) */
        case 'LOGIN_SUCCESS':
            return Object.assign({}, true, action)
        case 'LOGOUT_SUCCESS':
            return Object.assign({}, false, action)
        default:
            return state
    }
}

const rootReducer = combineReducers({
    isLoggedIn
})

export default rootReducer
