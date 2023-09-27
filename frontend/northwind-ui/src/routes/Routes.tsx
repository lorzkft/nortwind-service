import { Routes, Route } from 'react-router-dom'
import { ProductSummary, Products } from '../pages'

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product-summary" element={<ProductSummary />} />
    </Routes>
  )
}
export default Main
