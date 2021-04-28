import {FirstRangeSelected, RangeSelected, SelectingRange, AllSurahs} from '../types'



const AppReducer= (state, action )=> {

switch (action.type) {
    case FirstRangeSelected:{
        return {
            ...state,
            firstRangeSelected:action.payload.val

        }
    }
    case RangeSelected:{
        return {
            ...state,
            rangeSelected:action.payload.val

        }
    }
    case SelectingRange:{
        return {
            ...state,
            selectingRange: action.payload.val

        }
    }
    case AllSurahs:{
        return{
            ...state,
            allSurahs: action.payload.val
        }
    }
        
       

    default:
        
        break;
}


}





export default  AppReducer