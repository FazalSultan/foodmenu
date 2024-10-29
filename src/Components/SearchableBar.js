import React from "react";
import styles from './SearchBar.module.css'

export default function SearchableBar() {
  return (
    <>
      <div className= {`${styles.container}`}>
        <input type="search" name="searchbar" placeholder="Search..." />
        <div>
          <input type="checkbox" name="checkboxbtn" />{" "}
          <span> Only show Product in Stack</span>
        </div>
      </div>
    </>
  );
}
