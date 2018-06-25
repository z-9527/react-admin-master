import React from 'react'
import {Card, Col, Row, Icon, Button, message, Carousel} from 'antd'
import CustomBreadcrumb from '../../../common/CustomBreadcrumb/index'
import './css/style.css'
import 'animate.css'

const animations = [
  ['bounceInDown','bounceInUp'],
  ['bounceInLeft','bounceInRight'],
  ['rotateIn','rotateIn'],
  ['flipInX','flipInY'],
  ['rotateInDownLeft','rotateInUpRight'],
  ['rotateInDownRight','rotateInUpLeft'],
]

function getAnimation(animations){
  let index = Math.floor(Math.random()*animations.length)
  console.log(index)
  let arr = animations[index]
  arr = arr.map(item=>{
    return `${item} animated slider-active`
  })
  return arr
}


class CarouselDemo extends React.Component {
  state = {
    current:0
  }
  animations = getAnimation(animations)
  componentWillUpdate(){
    //当current变化时，也就是state变化时重新给animations赋值，否则animations不会改变.实现类似vue的watch
    //用componentWUpdate还是componentDidUpdate根据具体场景，componentDidUpdate一般是需要用到state时调用（因为setState是异步，需要等更新完成）

    // this.animations = getAnimation(animations)
    // if (getAnimation(animations)[0] === this.animations[0])
    //如何实现不出现连续重复的动画
  }
  render(){
    const { current} = this.state
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
          <Carousel speed={100} arrows afterChange={(current)=>this.setState({current})}>
            <div>
              <div className='slider-item'>
                <h3 className={current === 0 ? this.animations[0] : ''}>Ant Design of React</h3>
                <p className={current === 0 ? this.animations[1] : ''}>The Fast Way Use Animation In React</p>
              </div>
            </div>
            <div>
              <div className='slider-item'>
                <h3 className={current === 1 ? this.animations[0] : ''}>Ant Design of React</h3>
                <p className={current === 1 ? this.animations[1] : ''}>The Fast Way Use Animation In React</p>
              </div>
            </div>
            <div>
              <div className='slider-item'>
                <h3 className={current === 2 ? this.animations[0] : ''}>Ant Design of React</h3>
                <p className={current === 2 ? this.animations[1] : ''}>The Fast Way Use Animation In React</p>
              </div>
            </div>
            <div>
              <div className='slider-item'>
                <h3 className={current === 3 ? this.animations[0] : ''}>Ant Design of React</h3>
                <p className={current === 3 ? this.animations[1] : ''}>The Fast Way Use Animation In React</p>
              </div>
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}

export default CarouselDemo