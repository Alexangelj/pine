
import Web3 from 'web3';
import truffleConfig from '../truffle-config';


export const WEB3_CONNECTED = 'WEB3_CONNECTED';
export const WEB3_DISCONNECTED = 'WEB3_DISCONNECTED';


export const web3Connect = () => {
  return (dispatch, getState) => {
    /*eslint-disable */
    let web3Location = `http://${truffleConfig.networks.development.host}:${truffleConfig.networks.development.port}`

    let output = (typeof web3 !== 'undefined') // web3 given by metamask
                  ? { 
                      type: WEB3_CONNECTED, 
                      payload: { 
                            web3: new Web3(web3.currentProvider), 
                            isConnected: true 
                    } }
                  //: { type: WEB3_DISCONNECTED, payload: { web3: null, isConnected: false } }  // comment out for optional section
                  : { 
                      type: WEB3_CONNECTED, 
                      payload: { 
                            web3: new Web3(new Web3.providers.HttpProvider(web3Location)), 
                            isConnected: true 
                    } }  // comment in for optional section
    /*eslint-enable */
    dispatch(output)
  }
}

export function web3Connected ({ web3, isConnected }) {
  return {
    type: WEB3_CONNECTED,
    payload: {
      web3,
      isConnected
    }
  }
}

export function web3Disconnected () {
  return {
    type: WEB3_DISCONNECTED,
    payload: {
      web3: null,
      isConnected: false
    }
  }
}

export const actions = {
  web3Connect,
  web3Connected,
  web3Disconnected
}


const ACTION_HANDLERS = {
  [WEB3_CONNECTED]: (state, action) => {
    return action.payload
  },
  [WEB3_DISCONNECTED]: (state, action) => {
    return action.payload
  }
}


const initialState = { isConnected: false }
export default function Web3Reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}