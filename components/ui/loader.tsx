import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <span className={`${styles.item} ${styles.item1}`} />
      <span className={`${styles.item} ${styles.item2}`} />
      <span className={`${styles.item} ${styles.item3}`} />
      <span className={`${styles.item} ${styles.item4}`} />
      <span className={`${styles.item} ${styles.item5}`} />
    </div>
  );
};

export default Loader;
