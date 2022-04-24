import { Avatar, Card, Col, Row, Space } from 'antd'
import clsx from 'clsx'
import Button from 'components/Button'
import React from 'react'
import { ArrowRightOutlined, CheckOutlined } from '@ant-design/icons'
import Statistic from 'components/Statistic'
import Headline from 'components/Headline'
import Container from 'components/Container'
import { numberWithCommas } from 'helpers/numberFormat'
import Link from 'next/link'
import s from './Hero.module.scss'

const Hero = () => (
  <div className={s.root}>
    <Container>
      <Row gutter={[32, 32]}>
        <Col md={12} span={24} className={s.heroLeft}>
          <p className={s.heroLeftLabel}>Create & Sell NFT Item.</p>
          <Headline className={s.heroLeftHeadline} level={1}>
            NFT Marketplace Explore, Collect or Sell
          </Headline>
          <p className={s.heroLeftInduction}>
            Create {'>'} Explore {'>'} Sell & Earn
          </p>

          <Space direction="vertical" size={64}>
            <Link href="/posting">
              <Button className="has-right-icon" icon={<ArrowRightOutlined />} size="large" type="primary">
                Create item
              </Button>
            </Link>

            <Space size={32}>
              <Statistic title="NFTs Artworks" value={2467} suffix="K" />
              <Statistic title="Live Auction" value={1104} />
              <Statistic title="Creator Earning" value={444} suffix="M" />
            </Space>
          </Space>
        </Col>
        <Col md={12} span={24} className={s.heroRight}>
          <Card
            bordered={false}
            cover={
              <div className={s.heroRightImg}>
                <img src="https://storage.opensea.io/static/promocards/misan-promocard2.png" alt="hero right" />
                <div className={s.heroRightImgInner}>
                  <Space direction="vertical" size={8}>
                    <Space size={128} align="center">
                      <Space size={8}>
                        <CheckOutlined className={s.tickIcon} />
                        <p className={s.title}>Available stock 4</p>
                      </Space>
                      <div className={s.heartWrapper}>
                        <img width={16} height={16} src="/img/heart.svg" alt="heart" />
                      </div>
                    </Space>

                    <Headline level={2}>Creative White Lady</Headline>
                    <Space size={4} align="end">
                      <Avatar
                        className={s.profileBtn}
                        size={24}
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                      <p className={s.userName}>@James_alex01</p>
                      <div className={s.price}>
                        <div className={clsx(s.icon, s.bgBlue, s.iconSm, s.iconCircle)}>
                          <img width={12} height={12} src="/img/usdt.svg" alt="icon" />
                        </div>

                        <p className={s.priceLabel}>Price:</p>
                        <p>{numberWithCommas(1000)} USDT</p>
                      </div>
                    </Space>
                  </Space>
                </div>
              </div>
            }
          />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Hero
