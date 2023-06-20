import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

function Main() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Main