import React from "react";
import styles from "./ProductCategoryRow.module.css";

export default function Fruits(props) {
  return <div className={`${styles.container}`}>{props.value}</div>;
}
