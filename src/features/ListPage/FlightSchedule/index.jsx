import React from "react";
import styles from "./index.module.css";

const Flight = ({ origin, destination }) => {
  return (
    <div className={styles.main}>
      <p>{origin}</p>
      <div className={styles.line} />
      <p>{destination}</p>
    </div>
  );
};

export default Flight;
