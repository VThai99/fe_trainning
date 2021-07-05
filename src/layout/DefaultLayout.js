import React from 'react'
import { Content, Sidebar, Header } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <div className="body flex-grow-1 px-3">
          <Content />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
