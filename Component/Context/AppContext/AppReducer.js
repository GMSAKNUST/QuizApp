import {
  FirstRangeSelected,
  RangeSelected,
  SelectingRange,
  AllSurahs,
  SetEnd,
  SetStart,
  SetGeneratedRange,
  SetSelectedPages,
  SetShowModal,
  SetCurrentImage,
  SetErrorMessage,
} from "../types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case FirstRangeSelected: {
      return {
        ...state,
        firstRangeSelected: action.payload.val,
      };
    }
    case RangeSelected: {
      return {
        ...state,
        rangeSelected: action.payload.val,
      };
    }
    case SelectingRange: {
      return {
        ...state,
        selectingRange: action.payload.val,
      };
    }
    case AllSurahs: {
      return {
        ...state,
        allSurahs: action.payload.val,
      };
    }
    case SetEnd: {
      return {
        ...state,
        end: action.payload.val,
      };
    }
    case SetStart: {
      return {
        ...state,
        start: action.payload.val,
      };
    }
    case SetGeneratedRange: {
      return {
        ...state,
        generatedRange: action.payload.val,
      };
    }

    case SetSelectedPages: {
      return {
        ...state,
        selectedPages: action.payload.val,
      };
    }

    case SetShowModal: {
      return {
        ...state,
        showModal: action.payload.val,
      };
    }
    case SetCurrentImage: {
      return {
        ...state,
        currentImage: action.payload.val,
      };
    }
    case SetErrorMessage: {
      return {
        ...state,
        errorMessage: action.payload.val,
      };
    }
    default:
      break;
  }
};

export default AppReducer;
