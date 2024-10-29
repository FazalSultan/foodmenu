import React from 'react'
import styles from './Filter.module.css'
import SearchableBar from './SearchableBar'
import ProductTable from './ProductTable'

export default function FilterableProductTable() {
  return (
    <>
    <div  className ={`card container ${styles.card}`}>
          <SearchableBar />
          <ProductTable />
    </div>
    </>
  )
}
