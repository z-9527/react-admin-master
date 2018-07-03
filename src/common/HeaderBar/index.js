import React from 'react'
import { Icon, Badge } from 'antd'
import screenfull from 'screenfull'
import {inject,observer} from 'mobx-react'
import {Link,withRouter} from 'react-router-dom'


//withRouter一定要写在前面，不然路由变化不会反映到props中去
@withRouter @inject('appStore') @observer
class HeaderBar extends React.Component {
  state = {
    icon: 'arrows-alt',
    count:100,
  }
  componentDidMount(){
    screenfull.onchange(()=>{
      this.setState({
        icon:screenfull.isFullscreen?'shrink':'arrows-alt'
      })
    })
  }
  componentWillUnmount(){
    screenfull.off('change')
  }
  toggle = () => {
    this.props.onToggle()
  }
  screenfullToggle = () => {
    if (screenfull.enabled) {
      screenfull.toggle()
    }
  }

  render () {
    const {icon,count} = this.state
    const {appStore,collapsed,location} = this.props
    const notLogin = (
      <div>
        <Link to={{pathname: '/login',state: { from: location }}} style={{color:'rgba(0, 0, 0, 0.65)'}}>登录</Link>&nbsp;
        <img src="http://s.stu.126.net/res/images/headImg/small.jpg?c736f7606af92817871f1b78f94f42be" alt=""/>
      </div>
    )
    return (
      <div>
        <Icon
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          className='trigger'
          onClick={this.toggle}/>
        <div style={{lineHeight: '64px', float: 'right'}}>
          <ul className='header-ul'>
            <li><Icon type={icon} onClick={this.screenfullToggle}/></li>
            <li onClick={()=>this.setState({count:0})}>
              <Badge count={appStore.isLogin?count:0} overflowCount={99} style={{marginLeft: 17}}>
                <Icon type="notification"/>
              </Badge>
            </li>
            <li>
              {
                appStore.isLogin ? <img src="http://cheng_haohao.oschina.io/reactadmin/static/media/b1.553c69e9.jpg" alt="" />:notLogin
              }
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderBar