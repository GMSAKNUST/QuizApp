import {FirstRangeSelected, RangeSelected, SelectingRange} from '../types'
import {useReducer} from 'react'
import AppContext from './AppContext'
import AppReducer from './AppReducer'


const AppState = props => {
const initialState = {
    firstRangeSelected:false,
    selectingRange:false,
    RangeSelected:false
}

const [state, dispatch] = useReducer(AppReducer, initialState)
// Actions goes here
const setFirstRangeSelected = (value)=> {
    dispatch({
      type: FirstRangeSelected,
      payload:{
          val:value
      }  
    })

}

const setRangeSelected = (value)=> {
    dispatch({
        type: RangeSelected,
        payload:{
            val:value
        }  
      })
}

const setSelectingRange = (value)=> {
    dispatch({
        type: SelectingRange,
        payload:{
            val:value
        }  
      })
}


return (
    <AppContext.Provider
    value ={{
firstRangeSelected:state.firstRangeSelected,
selectingRange:state.selectingRange,
rangeSelected:state.rangeSelected,
setFirstRangeSelected,
setRangeSelected,
setSelectingRange,

    }}
    >

        {props.children}
    </AppContext.Provider>
)






}

export default AppState;