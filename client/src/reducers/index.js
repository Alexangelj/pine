import { combineReducers } from 'redux'
import web3Reducer from './web3Reducer'


const allReducers = combineReducers({
  web3Wrapper: web3Reducer,
});

export default allReducers