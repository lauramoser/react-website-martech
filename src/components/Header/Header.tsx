import React from "react";
import styles from "./Header.module.css";

const Head: React.FC<{}> = () => {
    return(
        <div className={styles["header-container"]}>
          <img src="/images/header_pic.jpg"/>
        </div> 
    );
  }

  export default Head;