import Tabs from 'components/Tabs'
import React, { FC } from 'react'
import { Tabs as AntdTabs } from 'antd'
import Headline from 'components/Headline'
import ProductCardList from 'components/ProductCardList'
import { IArtItem } from 'interface/art'
import s from './Products.module.scss'

interface ProductsProps {
  popularProducts: IArtItem[]
  newestProducts: IArtItem[]
}

const { TabPane } = AntdTabs

const Products: FC<ProductsProps> = ({ popularProducts, newestProducts }) => (
  <div className={s.tabWrapper}>
    <Tabs
      defaultActiveKey="popular"
      tabBarExtraContent={
        <Headline className={s.headline} level={2}>
          Explore Artwork
        </Headline>
      }
    >
      <TabPane tab="Popular" key="popular">
        <ProductCardList
          gutter={[32, 32]}
          xl={6}
          md={8}
          sm={12}
          span={24}
          cards={popularProducts}
          skeleton={{
            loading: false,
            count: 8,
          }}
        />
      </TabPane>
      <TabPane tab="Newest" key="newest">
        <ProductCardList
          gutter={[32, 32]}
          xl={6}
          md={8}
          sm={12}
          span={24}
          cards={newestProducts}
          skeleton={{
            loading: false,
            count: 8,
          }}
        />
      </TabPane>
    </Tabs>
  </div>
)

export default Products
