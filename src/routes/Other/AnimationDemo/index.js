import React from 'react'
import {Card, Menu, Row, Col, Dropdown, Icon, message, Button} from 'antd'
import Shuffle from 'shufflejs'
import 'animate.css'
import CustomBreadcrumb from '../../../common/CustomBreadcrumb/index'

const animations = [
  {
    groups:['Attention Seekers'],
    list:['bounce','flash','pulse','rubberBand','shake','swing','tada','wobble','jello']
  },
  {
    groups:['Bouncing Entrances','Entrances'],
    list:['bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp']
  },
  {
    groups:['Bouncing Exits','Exits'],
    list:['bounceOut','bounceOutDown','bounceOutLeft','bounceOutRight','bounceOutUp']
  },
  {
    groups:['Fading Entrances','Entrances'],
    list:['fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig']
  },
  {
    groups:['Fading Exits','Exits'],
    list:['fadeOut','fadeOutDown','fadeOutDownBig','fadeOutLeft','fadeOutLeftBig','fadeOutRight','fadeOutRightBig','fadeOutUp','fadeOutUpBig']
  },
  {
    groups:['Flippers'],
    list:['flip','flipInX','flipInY','flipOutX','flipOutY']
  },
  {
    groups:['Lightspeed'],
    list:['lightSpeedIn','lightSpeedOut']
  },
  {
    groups:['Rotating Entrances','Entrances'],
    list:['rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight']
  },
  {
    groups:['Rotating Exits','Exits'],
    list:['rotateOut','rotateOutDownLeft','rotateOutDownRight','rotateOutUpLeft','rotateOutUpRight']
  },
  {
    groups:['Sliding Entrances','Entrances'],
    list:['slideInUp','slideInDown','slideInLeft','slideInRight']
  },
  {
    groups:['Sliding Exits','Exits'],
    list:['slideOutUp','slideOutDown','slideOutLeft','slideOutRight']
  },
  {
    groups:['Zoom Entrances','Entrances'],
    list:['zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp']
  },
  {
    groups:['Zoom Exits','Exits'],
    list:['zoomOut','zoomOutDown','zoomOutLeft','zoomOutRight','zoomOutUp']
  },
  {
    groups:['Specials'],
    list:['hinge','rollIn','rollOut','jackInTheBox']
  }

]

function getGroups(arr){
  return arr.map(item=>{
    return item.replace(/\s/g,'')
  })
}

class AnimationDemo extends React.Component{
  componentDidMount(){
    this.shuffle = new Shuffle(this.shuffleDemo, {
      itemSelector: '.shuffle-item',
      sizer: this.sizer,
    });
  }
  componentDidUpdate() {
    this.shuffle.resetItems();
  }
  componentWillUnmount() {
    this.shuffle.destroy();
    this.shuffle = null;
  }
  render(){
    return (
      <div>
        <CustomBreadcrumb arr={['其它','动画']}/>
        <Card title='何时使用' hoverable style={{marginBottom: 15}} bordered={false}>
          当需要动态效果，如过渡、鼠标悬浮等。
          本页面用到了animation.css库和shufflejs库
        </Card>
        <Card>
          <p>
            <Button style={{margin:'5px 10px'}} onClick={()=>this.shuffle.filter()}>All</Button>
            <Button style={{margin:'5px 10px'}} onClick={()=>this.shuffle.filter('Entrances')}>Entrances</Button>
            <Button style={{margin:'5px 10px'}} onClick={()=>this.shuffle.filter('Exits')}>Exits</Button><br/>
            {
              animations.map(item=>(
                <Button
                  key={item.groups}
                  onClick={()=>this.shuffle.filter(item.groups[0].replace(/\s/g,''))}
                  style={{margin:'5px 10px'}}>{item.groups}
                </Button>
                ))
            }
          </p>
        </Card>
        <div style={styles.box}>
          <div ref={(div)=>this.shuffleDemo=div}>
            {
              animations.map(item=>{
                return item.list.map(i=>{
                  return <div
                    className='shuffle-item animated'
                    style={styles.item}
                    ref={(el)=>this[i]=el}
                    onMouseEnter={()=>this[i].classList.add(i,'infinite')}
                    onMouseLeave={()=>this[i].classList.remove(i,'infinite')}
                    data-groups={JSON.stringify(getGroups(item.groups))}
                    key={i}>
                    <h3>{i}</h3>
                  </div>
                })
              })
            }
            {/*下面的div是为了间隔宽度*/}
            <div style={{width:'8.33333%'}}  ref={(div)=>this.sizer = div}/>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  item:{
    width:'22%',
    marginTop:16,
    backgroundColor:'#fff',
    padding:40,
    textAlign:'center',
    fontSize:14,
    fontWeight:500,
    border:'1px solid #d9d9d9'
  },
  box:{
    minHeight:500,
    padding: '10px 32px',
  }
}

export default AnimationDemo