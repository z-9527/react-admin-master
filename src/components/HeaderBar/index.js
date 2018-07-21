import React from 'react'
import { Icon, Badge, Dropdown, Menu } from 'antd'
import screenfull from 'screenfull'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated } from '../../utils/Session'

//withRouter一定要写在前面，不然路由变化不会反映到props中去
@withRouter @inject('appStore') @observer
class HeaderBar extends React.Component {
  state = {
    icon: 'arrows-alt',
    count: 100,
  }

  componentDidMount () {
    screenfull.onchange(() => {
      this.setState({
        icon: screenfull.isFullscreen ? 'shrink' : 'arrows-alt'
      })
    })
  }

  componentWillUnmount () {
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
  logout = () => {
    this.props.appStore.toggleLogin(false)
    this.props.history.push(this.props.location.pathname)
  }

  render () {
    const {icon, count} = this.state
    const {appStore, collapsed, location} = this.props
    const notLogin = (
      <div>
        <Link to={{pathname: '/login', state: {from: location}}} style={{color: 'rgba(0, 0, 0, 0.65)'}}>登录</Link>&nbsp;
        <img src={require('../../assets/img/defaultUser.jpg')} alt=""/>
      </div>
    )
    const menu = (
      <Menu className='menu'>
        <Menu.ItemGroup title='用户中心' className='menu-group'>
          <Menu.Item>你好 - {isAuthenticated()}</Menu.Item>
          <Menu.Item>个人信息</Menu.Item>
          <Menu.Item><span onClick={this.logout}>退出登录</span></Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title='设置中心' className='menu-group'>
          <Menu.Item>个人设置</Menu.Item>
          <Menu.Item>系统设置</Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    )
    const login = (
      <Dropdown overlay={menu}>
        <img src="http://cheng_haohao.oschina.io/reactadmin/static/media/b1.553c69e9.jpg" alt=""/>
      </Dropdown>
    )
    return (
      <div id='headerbar'>
        <Icon
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          className='trigger'
          onClick={this.toggle}/>
        <div style={{lineHeight: '64px', float: 'right'}}>
          <ul className='header-ul'>
            <li><Icon type={icon} onClick={this.screenfullToggle}/></li>
            <li onClick={() => this.setState({count: 0})}>
              <Badge count={appStore.isLogin ? count : 0} overflowCount={99} style={{marginLeft: 17}}>
                <Icon type="notification"/>
              </Badge>
            </li>
            <li>
              {appStore.isLogin ? login : notLogin}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderBar