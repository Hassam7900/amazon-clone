import React, {createContext,useContext,useReducer} from 'react';
//prepare the data
export const StateContext=createContext();
//wrap the app and provide the data to components
export default function StateProvider({reducer,initialState,children}) {
  return (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider> 
  )
}
//pull data from data layer
export const useStateValue = () => useContext(StateContext);
