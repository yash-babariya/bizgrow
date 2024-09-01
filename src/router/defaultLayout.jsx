import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../common/sidebar'
// import Header from '../common/header'

export default function DefaultLayout() {
    return (
        <div>
            <Sidebar />
            {/* <Header /> */}
            <Outlet />
        </div>
    )
}
