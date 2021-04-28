import {FirstRangeSelected, RangeSelected, SelectingRange, AllSurahs} from '../types'
import axios from 'axios'
import {useReducer, useEffect} from 'react'
import AppContext from './AppContext'
import AppReducer from './AppReducer'


const AppState = props => {
const initialState = {
    firstRangeSelected:false,
    selectingRange:false,
    RangeSelected:false,
    allSurahs:[]
}

const [state, dispatch] = useReducer(AppReducer, initialState)
// Actions goes here

// useEffect(() => {
// }, [])

useEffect(() => {
    setFirstRangeSelected(false)

  axios.get('/api/surahs')
  .then(res => {
    //   console.log(res.data)
    setAllSurahs(res.data)
  })
//   console.log(state. allSurahs)
}, [])


const setAllSurahs =(value)=>{
    dispatch({
        type:AllSurahs,
        payload:{
            val: value
        }
    })
}

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
allSurahs:state.allSurahs,
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