import React from "react";
import styles from './Card.module.css'
import Form from "./Form";


export default function Card() {
  return (
    <>
      <div  className ={`card container ${styles.cards}`}>
        <div className="card-body">
          <h5 className={`card-title ${styles.cardtitle}`}>Todo App by Fazal Sultan Khan</h5>
          <Form />
        </div>
      </div>
    </>
  );
}
