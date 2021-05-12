import { useContext, useState } from "react";
import AppContext from "../Component/Context/AppContext/AppContext";

import Styles from "../styles/Modal.module.css";
import Image from "next/image";

export default function Modal() {
  const appContext = useContext(AppContext);
  const {
    selectedPages,
    showModal,
    setShowModal,
    setSelectedPages,
    currentImage,
    setCurrentImage,
  } = appContext;
  const [index, setIndex] = useState(1);
  const [current, setCurrent] = useState(selectedPages[index]);

  const DontShowModal = (e) => {
    setShowModal(false);
    setSelectedPages([]);
  };

  async function changeMe(e) {
    let len = selectedPages.length;
    setIndex(index + 1);

    if (index < 3) {
      await setCurrentImage(selectedPages[index]);
    } else {
      setShowModal(false);
      setSelectedPages([]);
    }
  }
  return (
    <div className={Styles.ModalMain}>
      <div
        className={Styles.backdrop}
        data-testid="backdrop"
        onClick={DontShowModal}
      ></div>

      <center>
        <div className={Styles.myImgContainer}>
          <img src={currentImage} alt="" />
        </div>
        <button onClick={changeMe}>Next</button>
      </center>
    </div>
  );
}
