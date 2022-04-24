import CollectionCardList from 'components/CollectionCardList'
import Headline from 'components/Headline'
import { IArtItem } from 'interface/art'
import React from 'react'
import s from './Collections.module.scss'

const dummy: IArtItem[] = [
  {
    _id: '622af5fbc7ae883923b82393',
    userId: '621f42018200f36d26ec2c73',
    path: 'https://s3.hlk-demo.online/asset/art/621f42018200f36d26ec2c73/asset/622af5fbc7ae883923b82393_16afabe5199c4a1d620efc99194a3bec94db011e.png.preview',
    contentType: 'image/png',
    title: '20mb',
    category: ['GAME'],
    price: 1000,
    description: 'test 20 mb ff',
    status: 'NEW',
    createdAt: 1646982652009,
    user: {
      _id: '621f42018200f36d26ec2c73',
      name: 'adev.mydev',
    },
    aggUser: {
      _id: '621f42018200f36d26ec2c73',
      name: 'adev.mydev',
    },
    aggCategory: [],
  },
  {
    _id: '622af3c6c7ae883923b82392',
    userId: '621f42018200f36d26ec2c73',
    path: 'https://s3.hlk-demo.online/asset/art/621f42018200f36d26ec2c73/asset/622af3c6c7ae883923b82392_f1491d96536f48f99df34f647daec5b6d72db96e.png.preview',
    contentType: 'image/png',
    title: 'png vltk',
    category: ['GAME'],
    price: 100,
    description: 'vltk',
    status: 'NEW',
    createdAt: 1646982087002,
    user: {
      _id: '621f42018200f36d26ec2c73',
      name: 'adev.mydev',
    },
    aggUser: {
      _id: '621f42018200f36d26ec2c73',
      name: 'adev.mydev',
    },
    aggCategory: [],
  },
  {
    _id: '622abcf6ebe1560fb3ba9200',
    userId: '6224405422f9794137d8c4f6',
    path: 'https://s3.hlk-demo.online/asset/art/6224405422f9794137d8c4f6/asset/622abcf6ebe1560fb3ba9200_b7247bf29cf872a99ae474789cda439a4e976614.jpeg.preview',
    contentType: 'image/jpeg',
    title: 'Sabet',
    category: ['HUMAN'],
    price: 22,
    description: 'A collection of Love inspired paintings by sabet\nVisit',
    status: 'NEW',
    createdAt: 1646968055023,
    user: {
      _id: '6224405422f9794137d8c4f6',
      name: 'nghia0969261137',
    },
    aggUser: {
      _id: '6224405422f9794137d8c4f6',
      name: 'nghia0969261137',
    },
    aggCategory: [],
  },
  {
    _id: '622aae0ec7ae883923b82390',
    userId: '6224405422f9794137d8c4f6',
    path: 'https://s3.hlk-demo.online/asset/art/6224405422f9794137d8c4f6/asset/622aae0ec7ae883923b82390_0720884c1f782e36e8a5b49ff813940392c55592.png.preview',
    contentType: 'image/png',
    title: 'NessGraphics',
    category: ['GAME'],
    price: 88,
    description:
      '26 year old digital artist NessGraphics works in a wide range of modern media, known primarily for h...',
    status: 'NEW',
    createdAt: 1646964239140,
    user: {
      _id: '6224405422f9794137d8c4f6',
      name: 'nghia0969261137',
    },
    aggUser: {
      _id: '6224405422f9794137d8c4f6',
      name: 'nghia0969261137',
    },
    aggCategory: [],
  },
  {
    _id: '622aad85ebe1560fb3ba91ff',
    userId: '6224405422f9794137d8c4f6',
    path: 'https://s3.hlk-demo.online/asset/art/6224405422f9794137d8c4f6/asset/622aad85ebe1560fb3ba91ff_8492362bf66f95b293de48ee9044c918fae5634c.jpeg.preview',
    contentType: 'image/jpeg',
    title: 'Pepelangelo Oil to NFT',
    category: ['HUMAN'],
    price: 99,
    description: 'First tokenized real Pepelangelo paintings',
    status: 'NEW',
    createdAt: 1646964101834,
    user: {
      _id: '6224405422f9794137d8c4f6',
      name: 'nghia0969261137',
    },
    aggUser: {
      _id: '6224405422f9794137d8c4f6',
      name: 'nghia0969261137',
    },
    aggCategory: [],
  },
  {
    _id: '62297b9debe1560fb3ba91f9',
    userId: '621f42018200f36d26ec2c73',
    path: 'https://s3.hlk-demo.online/asset/art/621f42018200f36d26ec2c73/asset/62297b9debe1560fb3ba91f9_0a3773407bb6889ad30e1ae0ecedf96099d829f2.jpeg.preview',
    contentType: 'image/jpeg',
    title: 'test',
    category: ['GAME'],
    price: 500,
    description: 'Olala test',
    status: 'NEW',
    createdAt: 1646885800126,
    user: {
      _id: '621f42018200f36d26ec2c73',
      name: 'adev.mydev',
    },
    aggUser: {
      _id: '621f42018200f36d26ec2c73',
      name: 'adev.mydev',
    },
    aggCategory: [],
  },
]

const Collections = () => (
  <div className={s.root}>
    <Headline className={s.headline} level={2}>
      Explore Collections
    </Headline>

    <div className={s.collections}>
      <CollectionCardList cards={dummy} gutter={[32, 32]} xl={8} md={12} span={24} />
    </div>
  </div>
)

export default Collections
