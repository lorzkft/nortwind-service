import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Links</h3>
            <Link to="/products">Products</Link>
            <Link to="/product-summary">Product summary</Link>
          </div>
          <div className="footer-column">
            <h3 className="copyright">&copy; 2023 Northwind UI</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
