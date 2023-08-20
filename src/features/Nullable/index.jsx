import React from "react";
import ErrorSvg from "../../assets/images/svgs/error.svg";
import styles from "./index.module.css";
import { PATHS } from "../../constants";
import { useNavigate } from "react-router-dom";

const Nullable = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(PATHS.SEARCH);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img src={ErrorSvg} alt="Error" />
        <h2>Aradığınız kriterlere göre uçuş bulunamadı.</h2>
        <button className={styles.button} onClick={handleNavigate}>
          Başa dön.
        </button>
      </div>
    </main>
  );
};

export default Nullable;
