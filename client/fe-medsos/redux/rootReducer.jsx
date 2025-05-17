import storage from 'redux-persist'
import { combineReducers } from 'redux'
import authReducer from "./reducer/authReducer"
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const root = combineReducers({
    auth: authReducer
})

const persitedReducer = persistReducer(persistConfig, root)
export default persitedReducer