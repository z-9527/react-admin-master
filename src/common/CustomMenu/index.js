import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Icon} from 'antd'

//此组件的意义就是将数据抽离出来，通过传递数据去渲染
class CustomMenu extends React.Component {
  renderMenuItem = ({key, icon, title,}) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <Icon type={icon}/>}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
  renderSubMenu = ({key, icon, title, subs}) => {
    return (
      <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
        {
          subs && subs.map(item => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </Menu.SubMenu>
    )
  }

  render() {
    return (
      <Menu {...this.props}>
        {
          this.props.menus && this.props.menus.map(item => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </Menu>
    )
  }
}

export default CustomMenu