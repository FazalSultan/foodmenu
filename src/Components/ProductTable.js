import React from 'react'
import styles from './ProductTable.module.css'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable() {
  return (
    <>
    <div className= {`${styles.container}`}>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <div>Name</div>
            <div>Price</div>
        </div>
        <ProductCategoryRow value='Fruits' />
        <ProductRow />
    </div>
    </>
  )
}
