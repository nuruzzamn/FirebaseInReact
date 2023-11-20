import React from 'react'
import { Outlet } from 'react-router-dom'

const RouterOutlet = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default RouterOutlet