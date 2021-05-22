import { useState, useContext } from "react";
import Styles from "../styles/SuspenseImage.module.css";
import AppContext from "../Component/Context/AppContext/AppContext";

import Image from "next/image";

export default function SupenseImage({ styleSetting, src }) {
  const appContext = useContext(AppContext);

  const { setShowModal, displayErrorMessage, imageHasLoad, setImageHasLoad } =
    appContext;

  const showImage = () => {
    setImageHasLoad(true);
    console.log("loaded");
  };

  const handleImageError = (e) => {
    setShowModal(false);
    displayErrorMessage("Network Error ");
  };
  return (
    <>
      <div
        className={imageHasLoad ? Styles.hide : Styles.show}
        style={styleSetting ? styleSetting : {}}
      >
        <Image
          className={Styles.loader}
          src="/images/spinning-circles.svg"
          height={25}
          width={0}
        />
      </div>
      <img
        onLoad={showImage}
        onError={handleImageError}
        className={`${imageHasLoad ? Styles.show : Styles.hide}`}
        src={src}
        alt="myImage"
      />
    </>
  );
}
