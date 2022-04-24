import MainLayout from 'layouts/MainLayout'
import React, { ReactElement } from 'react'

const HomePage = () => <div>HomePage</div>

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default HomePage
