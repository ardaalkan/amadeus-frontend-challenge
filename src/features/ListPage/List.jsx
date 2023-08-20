import React from "react";
import styles from "./List.module.css";
import ListTable from "./ListTable/ListTable";

const List = () => {
  return (
    <div className={styles.main}>
      <ListTable />
    </div>
  );
};

export default List;
