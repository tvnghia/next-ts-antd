import Headline from 'components/Headline'
import React, { FC } from 'react'
import CategoryCardList from 'components/CategoryCardList'
import { ICategoryItem } from 'interface/category'
import s from './Categories.module.scss'

interface CategoriesProps {
  categories: ICategoryItem[]
}

const Categories: FC<CategoriesProps> = ({ categories }) => (
  <div className={s.root}>
    <Headline className={s.headline} level={2}>
      NFTs Categories
    </Headline>

    <CategoryCardList
      gutter={[32, 32]}
      xl={4}
      md={8}
      sm={12}
      span={24}
      categories={categories}
      skeleton={{
        loading: false,
        count: categories.length,
      }}
    />
  </div>
)

export default Categories
