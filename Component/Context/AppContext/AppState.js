import {FirstRangeSelected, RangeSelected, SelectingRange, AllSurahs, SetStart, SetEnd, SetGeneratedRange , SetSelectedPages, SetShowModal} from '../types'
import axios from 'axios'
import {useReducer, useEffect} from 'react'
import AppContext from './AppContext'
import AppReducer from './AppReducer'


const AppState = props => {
const initialState = {
    firstRangeSelected:false,
    selectingRange:false,
    RangeSelected:false,
    allSurahs:[],
    start:null,
    end:null,
    generatedRange:{},
    selectedPages:[],
    showModal:false
}

const [state, dispatch] = useReducer(AppReducer, initialState)
// Actions goes here



useEffect(() => {
    setFirstRangeSelected(false)


   

  axios.get('/api/surahs')
  .then(res => {
    setAllSurahs(res.data)
  })

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

const setStart =(value)=> {
    dispatch({
        type:SetStart,
        payload:{
            val:value
        }
    })

}

const setEnd = (value)=> {
dispatch({
    type:SetEnd,
    payload:{
        val:value
    }
})
}

const setGeneratedRange =(value )=> {
dispatch({
    type:SetGeneratedRange,
    payload:{
        val: value
    }
})
}


const setSelectedPages = (value)=> {
    dispatch({
        type:SetSelectedPages,
        payload:{
            val:value
        }
    })
}

const setShowModal = (value)=> {
    dispatch({
        type:SetShowModal,
        payload:{
            val:value
        }
    })
}
async function SendRange(start , end){
   
    // axios.post("/api/randomSurahs", {
    //     start:start,
    //     end:end
    // })
    
    await axios.get(`https://mqi-quiz-api.herokuapp.com/quiz/quran/generate-pages/?start=${state.start}&end=${state.end}`)
    .then (res => {
        if(res.status !=200){
setRangeSelected(false)
setSelectingRange(true)
        }else {
            // store range 
            setGeneratedRange(res.data)
console.log(res.data)
            setRangeSelected(true)
            setSelectingRange(false)
            

         
        }
    }
        )

}

return (
    <AppContext.Provider
    value ={{
firstRangeSelected:state.firstRangeSelected,
selectingRange:state.selectingRange,
rangeSelected:state.rangeSelected,
allSurahs:state.allSurahs,
start: state.start,
end:state.end,
generatedRange:state.generatedRange,
selectedPages:state.selectedPages,
showModal:state.showModal,
setFirstRangeSelected,
setRangeSelected,
setSelectingRange,
setEnd,
setStart,
SendRange,
setGeneratedRange,
setAllSurahs,
setSelectedPages,
setShowModal,

    }}
    >

        {props.children}
    </AppContext.Provider>
)






}

export default AppState;