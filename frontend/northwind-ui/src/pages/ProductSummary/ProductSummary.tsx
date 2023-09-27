import React from 'react'
import ProductSummaryTable from '../../components/ProductSummaryTable/ProductSummaryTable'
import './ProductSummary.scss'

const ProductSummary = () => {
  return (
    <section className='product-summary-section'>
        <div className='container'>
            <div className='title-container'>
                <h1>Product summary</h1>
            </div>
            <div className='table-container'>
                <ProductSummaryTable />
            </div>
        </div>
    </section>
  )
}

export default ProductSummary