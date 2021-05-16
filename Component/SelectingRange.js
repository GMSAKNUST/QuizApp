import { useContext, useState, useEffect } from "react";
import AppContext from "../Component/Context/AppContext/AppContext";
import Styles from "../styles/SelectingRange.module.css";
import Image from "next/image";

export default function SelectingRange() {
  const appContext = useContext(AppContext);
  const {
    allSurahs,
    setRangeSelected,
    setSelectingRange,
    selectingRange,
    rangeSelected,
    setEnd,
    setStart,
    start,
    end,
    errorMessage,
    setErrorMessage,
    displayErrorMessage,
    loading,
    setLoading,
  } = appContext;

  // local state
  const [Startval, setStartVal] = useState();
  const [Endval, setEndval] = useState();

  useEffect(() => {
    if (
      Startval != undefined &&
      Startval != "focused" &&
      Endval != undefined &&
      Endval != "focused2"
    ) {
      setRangeSelected(true);
    } else {
      setRangeSelected(false);
      displayErrorMessage("Please pick a range");
    }
  }, [Startval, Endval]);

  const myRange = (e) => {
    let myv = e.target.value;

    let index = e.target.selectedIndex;

    if (e.target.name == "StartRange") {
      setStart(index);

      setStartVal(myv);
    } else {
      setEnd(index);
      setEndval(myv);
    }
  };

  return (
    <div className={Styles.main}>
      <h1>Select Surah Range</h1>

      <center>
        <div>
          <select
            name="StartRange"
            id="StartRange"
            value={Startval}
            onChange={myRange}
            required
          >
            <option value="focused">Select Start Range</option>

            {allSurahs.map((surah) => (
              <option value={surah} key={surah}>
                {surah}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            name="StopRange"
            value={Endval}
            onChange={myRange}
            id="StopRange"
          >
            <option value="focused2">Select Stop Range</option>

            {allSurahs.map((surah) => (
              <option value={surah} key={surah}>
                {surah}
              </option>
            ))}
          </select>
        </div>
      </center>
      {loading ? (
        <Image
          className={Styles.loader}
          src="/images/spinning-circles.svg"
          height={45}
          width={0}
        />
      ) : null}
      {!rangeSelected ? <span>{errorMessage}</span> : null}
    </div>
  );
}
