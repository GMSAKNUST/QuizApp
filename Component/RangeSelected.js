import { useState, useContext } from "react";
import AppContext from "../Component/Context/AppContext/AppContext";
import Styles from "../styles/RangeSelected.module.css";
import Modal from "./Modal";

export default function RangeSelected() {
  const appContext = useContext(AppContext);
  const {
    generatedRange,
    setSelectedPages,
    showModal,
    setShowModal,
    setCurrentImage,
  } = appContext;

  const change = (e) => {
    setShowModal(true);
    setSelectedPagesNow(e);
  };

  async function setSelectedPagesNow(e) {
    let pages = [];
    try {
      Object.values(generatedRange[e.target.value]).forEach((ress) =>
        pages.push(ress.page_url)
      );
      await setSelectedPages(pages);
      await setCurrentImage(pages[0]);
    } catch (error) {
      //catch error when label not clicked
      setShowModal(false);
    }
  }

  return (
    <div>
      {showModal ? <Modal /> : null}

      <center className={Styles.rangeContainer}>
        {Object.keys(generatedRange).map((res) => (
          <span key={res} onClick={change}>
            <input
              type="radio"
              name={res}
              id={`Range${res}`}
              keys={res}
              value={res}
            />
            <label htmlFor={res} key={res}>
              {res}
            </label>
          </span>
        ))}
      </center>
    </div>
  );
}
