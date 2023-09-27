import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import apiService from '../../api/ApiService'
import { ProductSummary } from '../../models'

const ProductSummaryTable: React.FC = () => {
  const [summaries, setSummaries] = useState<ProductSummary[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchProductSummaries = async () => {
    setLoading(true)
    try {
      const queryOptions = {
        orderBy: ['companyName asc, productName asc'],
      }
      const fetchedSummaries = await apiService.get(
        '/Orders/GetSummary',
        queryOptions,
      )
      setSummaries(fetchedSummaries || [])
    } catch (error) {
      console.error('Failed to fetch product summaries', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProductSummaries()
  }, [])

  const columns = [
    {
      field: 'companyName',
      headerName: 'Company Name',
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'productName',
      headerName: 'Product Name',
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'sumValue',
      headerName: 'Sum Value',
      type: 'number',
      minWidth: 100,
      flex: 1,
    },
  ]

  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        rows={summaries}
        columns={columns}
        pagination
        hideFooter={true}
        rowHeight={36}
        loading={loading}
        getRowId={(params) => params.productID}
      />
    </div>
  )
}

export default ProductSummaryTable
