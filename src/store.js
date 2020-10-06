import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import defaultState from './constants/defaultState'
import reducer from './reducers/Reducer'
// import rootReducer from './reducers/rootReducer'





export default function configurationStore(initialState=defaultState){
return createStore(
        reducer,
        initialState,
        applyMiddleware(thunk)
)
}