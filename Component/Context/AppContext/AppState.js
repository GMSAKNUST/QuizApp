import {
  FirstRangeSelected,
  RangeSelected,
  SelectingRange,
  AllSurahs,
  SetStart,
  SetEnd,
  SetGeneratedRange,
  SetSelectedPages,
  SetShowModal,
  SetCurrentImage,
  SetErrorMessage,
  SetLoading,
  SetImageHasLoad,
} from "../types";
import axios from "axios";
import { useReducer, useEffect } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";

const AppState = (props) => {
  const initialState = {
    firstRangeSelected: false,
    selectingRange: false,
    RangeSelected: false,
    allSurahs: [],
    start: null,
    end: null,
    generatedRange: {},
    selectedPages: [],
    showModal: false,
    currentImage: undefined,
    errorMessage: undefined,
    loading: false,
    imageHasLoad: false,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions goes here

  useEffect(() => {
    setFirstRangeSelected(false);

    axios.get("/api/surahs").then((res) => {
      setAllSurahs(res.data);
    });
  }, []);

  const setAllSurahs = (value) => {
    dispatch({
      type: AllSurahs,
      payload: {
        val: value,
      },
    });
  };

  const setFirstRangeSelected = (value) => {
    dispatch({
      type: FirstRangeSelected,
      payload: {
        val: value,
      },
    });
  };

  const setRangeSelected = (value) => {
    dispatch({
      type: RangeSelected,
      payload: {
        val: value,
      },
    });
  };

  const setSelectingRange = (value) => {
    dispatch({
      type: SelectingRange,
      payload: {
        val: value,
      },
    });
  };

  const setStart = (value) => {
    dispatch({
      type: SetStart,
      payload: {
        val: value,
      },
    });
  };

  const setEnd = (value) => {
    dispatch({
      type: SetEnd,
      payload: {
        val: value,
      },
    });
  };

  const setGeneratedRange = (value) => {
    dispatch({
      type: SetGeneratedRange,
      payload: {
        val: value,
      },
    });
  };

  const setSelectedPages = (value) => {
    dispatch({
      type: SetSelectedPages,
      payload: {
        val: value,
      },
    });
  };

  const setShowModal = (value) => {
    dispatch({
      type: SetShowModal,
      payload: {
        val: value,
      },
    });
  };
  async function SendRange(start, end) {
    setLoading(true);
    await axios
      .get(
        `https://mqi-quiz-api.herokuapp.com/quiz/quran/generate-pages/?start=${state.start}&end=${state.end}`,
        { validateStatus: false },
        { timeout: 2 }
      )
      .then((res) => {
        if (res.status != 200) {
          setRangeSelected(false);
          setSelectingRange(true);
          setLoading(false);
          displayErrorMessage(res.data.error);
        } else {
          // store range
          // console.log(res);
          setGeneratedRange(res.data);
          setRangeSelected(true);
          setSelectingRange(false);
          setLoading(false);
        }
      })
      .catch(function (error) {
        setLoading(false);
        setRangeSelected(false);
        setSelectingRange(true);
        displayErrorMessage("Check Your Internet Connection");
      });
  }
  const sendImageToAdmin = (imgUrl) => {
    axios
      .post(
        "https://mqi-quiz-api.herokuapp.com/quiz/quran/current-page/show/",
        {
          page_url: imgUrl,
        }
      )
      .then((res) => {
        if (res.data.success) {
          console.log("succes");
        } else {
          console.log("erro");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeImagefromAdmin = () => {
    axios
      .get("mqi-quiz-api.herokuapp.com/quiz/quran/current-page/remove/")
      .then((res) => {
        if (res.status != 200) {
          displayErrorMessage("Check Your Internet Connection");
        } else {
        }
      })
      .catch(function (error) {
        displayErrorMessage("Check Your Internet Connection");
        // console.log(error);
      });
  };
  const setCurrentImage = (value) => {
    dispatch({
      type: SetCurrentImage,
      payload: {
        val: value,
      },
    });
  };
  const setErrorMessage = (value) => {
    dispatch({
      type: SetErrorMessage,
      payload: {
        val: value,
      },
    });
  };

  const displayErrorMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(undefined);
    }, 4000);
  };

  const setLoading = (value) => {
    dispatch({
      type: SetLoading,
      payload: {
        val: value,
      },
    });
  };
  const setImageHasLoad = (value) => {
    dispatch({
      type: SetImageHasLoad,
      payload: {
        val: value,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        firstRangeSelected: state.firstRangeSelected,
        selectingRange: state.selectingRange,
        rangeSelected: state.rangeSelected,
        allSurahs: state.allSurahs,
        start: state.start,
        end: state.end,
        generatedRange: state.generatedRange,
        selectedPages: state.selectedPages,
        showModal: state.showModal,
        currentImage: state.currentImage,
        errorMessage: state.errorMessage,
        loading: state.loading,
        imageHasLoad: state.imageHasLoad,
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
        setCurrentImage,
        setErrorMessage,
        displayErrorMessage,
        setLoading,
        setImageHasLoad,
        sendImageToAdmin,
        removeImagefromAdmin,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
