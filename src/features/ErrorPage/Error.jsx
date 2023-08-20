import React from "react";
import MainLayout from "../../layout/MainLayout";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <MainLayout>
      <div className={styles.main}>Error Page - Sayfa Mevcut Değil</div>
    </MainLayout>
  );
};

export default Error;
