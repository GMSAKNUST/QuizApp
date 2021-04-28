import {FirstRangeSelected, RangeSelected, SelectingRange} from '../types'



export default (state, action )=> {

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
        
       

    default:
        
        break;
}


}





