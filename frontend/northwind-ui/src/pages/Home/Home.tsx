import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      Home
    </>
  )
}

export default Home
