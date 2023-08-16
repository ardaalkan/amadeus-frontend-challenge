import React from "react";
import styles from "./Main.module.css";
import MainLayout from "../../layout/MainLayout";

const Main = () => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <div className={styles.mainTitle}>
          <h2>
            {" "}
            Merhaba <br />
            Eğlenceli ve Konforlu Uçuşlar
          </h2>
        </div>
      </div>
    </MainLayout>
  );
};

export default Main;
