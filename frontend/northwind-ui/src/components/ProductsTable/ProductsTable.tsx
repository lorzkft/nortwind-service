import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import apiService from '../../api/ApiService'
import { Product } from '../../models'
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const ProductsTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [searchText, setSearchText] = useState<string>('')

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const queryOptions = {
        filter: searchText ? `contains(tolower(productName), '${encodeURI(searchText.toLowerCase())}')` : '',
        orderBy: ['ProductName asc'],
      }
      const fetchedProducts = await apiService.get(
        '/Products/Get',
        queryOptions,
      )
      setProducts(fetchedProducts?.value || [])
    } catch (error) {
      console.error('Failed to fetch products', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [searchText])

  useEffect(() => {
    fetchProducts()
  }, [])

  const columns = [
    {
      field: 'productName',
      headerName: 'Product Name',
      minWidth: 200,
      flex: 2,
    },
    {
      field: 'quantityPerUnit',
      headerName: 'Quantity Per Unit',
      minWidth: 200,
      flex: 2,
    },
    {
      field: 'unitPrice',
      headerName: 'Unit Price',
      type: 'number',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'unitsInStock',
      headerName: 'Units In Stock',
      type: 'number',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'unitsOnOrder',
      headerName: 'Units On Order',
      type: 'number',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'reorderLevel',
      headerName: 'Reorder Level',
      type: 'number',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'discontinued',
      headerName: 'Discontinued',
      type: 'boolean',
      minWidth: 150,
      flex: 1,
    },
    {
        field: 'supplierName',
        headerName: 'Supplier Name',
        minWidth: 200,
        flex: 2,
        valueGetter: (params: any) => params.row.supplier?.companyName || '-'
    },
    {
        field: 'categoryName',
        headerName: 'Category Name',
        minWidth: 200,
        flex: 2,
        valueGetter: (params: any) => params.row.category?.categoryName || '-'
    },
  ]

  return (
    <div style={{ width: '100%' }}>
      <TextField
        variant="outlined"
        size="small"
        label="Search Products"
        sx={{ marginBottom: '1.5em', marginTop: '1.5em' }}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(params) => params.productID}
        rowHeight={36}
        loading={loading}
        hideFooter={true}
      />
    </div>
  )
}

export default ProductsTable
