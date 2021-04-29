import {FirstRangeSelected, RangeSelected, SelectingRange, AllSurahs, SetEnd, SetStart} from '../types'



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
    case SetEnd: {
        return{
            ...state,
            end:action.payload.val
        }


    }
    case SetStart:{
        return{
            ...state,
            start:action.payload.val
        }
    }
        
       

    default:
        
        break;
}


}





export default  AppReducer