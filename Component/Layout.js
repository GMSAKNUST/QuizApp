import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import LayoutStyles from "./Layout.module.css";
import AppContext from "../Component/Context/AppContext/AppContext";

export default function Layout({ children }) {
  const appContext = useContext(AppContext);
  const {
    firstRangeSelected,
    selectingRange,
    rangeSelected,
    setFirstRangeSelected,
    setSelectingRange,
    setRangeSelected,
    start,
    end,
    SendRange,
    errorMessage,
  } = appContext;

  const fullDate = new Date();
  let date = fullDate.getFullYear();

  async function ChangingState() {
    if (!firstRangeSelected) {
      setFirstRangeSelected(true);
      setSelectingRange(true);
      setRangeSelected(false);
    } else if (selectingRange && rangeSelected) {
      await SendRange(start, end);
    } else {
      setRangeSelected(false);
      setSelectingRange(true);
    }
  }
  return (
    <section>
      <center>
        <>
          <Image src="/images/Mobile Quran.png" height={354} width={354} />
          {firstRangeSelected ? (
            <div className={LayoutStyles.firstSelected}>
              <h1> MQI QURAN FAIR {date}</h1>
              <h3>HIFZ CONTEST</h3>
              {rangeSelected ? (
                <span style={{ color: "red" }}>{errorMessage}</span>
              ) : null}
            </div>
          ) : (
            <div className={LayoutStyles.firstUnselected}>
              <h3>HIFZ CONTEST</h3>
            </div>
          )}
        </>

        <div>{children}</div>

        <div>
          {/* values depends on 3 state */}
          <button onClick={ChangingState} className={LayoutStyles.btnStyle}>
            {!firstRangeSelected
              ? "Select Range"
              : selectingRange
              ? "Confirm"
              : rangeSelected
              ? "Change Range"
              : "Select Range"}
          </button>
        </div>
      </center>
    </section>
  );
}
