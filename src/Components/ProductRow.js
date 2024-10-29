import React from "react";
import styles from "./ProductRow.module.css";
import ProductCategoryRow from "./ProductCategoryRow";

export default function ProductRow() {
  const categoryArray = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  return (
    <>
      <ul className={`${styles.parentlist}`}>
        {categoryArray.map(
          (val, index) =>
            val.category === "Fruits" && (
              <li className={`${styles.sublist}`} key={index}>
                <div>{val.name}</div> <div>{val.price}</div>{" "}
              </li>
            )
        )}
      </ul>
      <ProductCategoryRow value="Vegetables" />
      <ul className={`${styles.parentlist}`}>
        {categoryArray.map(
          (val, index) =>
            val.category === "Vegetables" && (
              <li className={`${styles.sublist}`} key={index}>
                <div>{val.name}</div> <div>{val.price}</div>
              </li>
            )
        )}
      </ul>
    </>
  );
}
