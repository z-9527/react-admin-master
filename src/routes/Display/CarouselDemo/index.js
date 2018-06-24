import React from 'react'
import {Card, Col, Row, Icon, Tabs, message, Radio} from 'antd'
import CustomBreadcrumb from '../../../common/CustomBreadcrumb/index'

class CarouselDemo extends React.Component {
  render(){
    return (
      <div>
        <CustomBreadcrumb arr={['显示','轮播图']}/>
        <Card hoverable bordered={false}
              style={{marginBottom: 15, lineHeight: '2em'}} title='何时使用'>
          <ul style={{listStyle: 'inside circle'}}>
            <li>当有一组平级的内容</li>
            <li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现</li>
            <li>常用于一组图片或卡片轮播</li>
          </ul>
        </Card>
        <Card title='基本用法'>

        </Card>
      </div>
    )
  }
}

export default CarouselDemo