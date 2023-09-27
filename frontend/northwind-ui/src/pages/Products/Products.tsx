import React from 'react'
import ProductsTable from '../../components/ProductsTable/ProductsTable'
import './Products.scss';

const Products = () => {
  return (
    <section className='products-section'>
        <div className='container'>
            <div className='title-container'>
                <h1>Products</h1>
            </div>
            <div className='table-container'>
                <ProductsTable />
            </div>
        </div>
    </section>
  )
}

export default Products