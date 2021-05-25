import { useContext, useState, useEffect } from "react";
import AppContext from "../Component/Context/AppContext/AppContext";

import Styles from "../styles/Modal.module.css";
import Image from "next/image";
import SupenseImage from "./SupenseImage";

export default function Modal() {
  const appContext = useContext(AppContext);
  const {
    selectedPages,
    setShowModal,
    setSelectedPages,
    currentImage,
    setCurrentImage,
    setImageHasLoad,
  } = appContext;
  const [index, setIndex] = useState(1);
  const [showImage, setShowImage] = useState(false);

  const DontShowModal = (e) => {
    setShowModal(false);
    setSelectedPages([]);
    setImageHasLoad(false);
  };

  async function changeImage(e) {
    setImageHasLoad(false);
    setShowImage(false);
    let len = selectedPages.length;
    setIndex(index + 1);

    if (index < 3) {
      await setCurrentImage(selectedPages[index]);
    } else {
      setShowModal(false);
      setSelectedPages([]);
    }
  }

  const ImageToggler = () => {
    if (showImage) {
      setShowImage(false);
    } else {
      setShowImage(true);
    }
  };
  return (
    <div className={Styles.ModalMain}>
      <div
        className={Styles.backdrop}
        data-testid="backdrop"
        onClick={DontShowModal}
      ></div>

      <center>
        <div className={Styles.myImgContainer}>
          {showImage ? (
            <SupenseImage
              styleSetting={{ width: "500px", height: "540px" }}
              src={currentImage}
            />
          ) : (
            <h1>Click Show button to show Image {index}</h1>
          )}
        </div>
        <span>
          <button onClick={changeImage}>Next</button>
          <button onClick={ImageToggler}>{showImage ? "hide" : "show"}</button>
        </span>
      </center>
    </div>
  );
}
