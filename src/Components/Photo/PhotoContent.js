import React from "react";
import styles from "./PhotoContent.module.css";

const PhotoContent = ({ data }) => {
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={data.src} alt="" />
      </div>
    </div>
  );
};

export default PhotoContent;
