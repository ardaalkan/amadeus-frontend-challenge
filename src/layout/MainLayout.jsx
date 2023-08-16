import React from "react";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <h1>Frontend Challenge</h1>
        <h2>Search Flight</h2>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
