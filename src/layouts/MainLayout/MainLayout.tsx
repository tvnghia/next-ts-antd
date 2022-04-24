import React, { FC } from 'react'
import Header from 'layouts/Header'
import Footer from 'layouts/Footer'
import s from './MainLayout.module.scss'

const MainLayout: FC = ({ children }) => (
  <div>
    <Header />

    <div className={s.main}>{children}</div>

    <Footer />
  </div>
)

export default MainLayout
