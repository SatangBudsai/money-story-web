'use client'

import React, { Fragment, ReactNode } from 'react'
import Navbar from './partial/navbar'
import Footer from './partial/footer'
import Sidebar from './partial/sidebar'

type Props = {
  children: ReactNode
}

const MainLayout = (props: Props) => {
  return (
    <Fragment>
      <div className=' max-w-screen flex min-h-[100dvh] flex-col'>
        <Navbar />
        <div className='flex-grow'>{props.children}</div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default MainLayout
