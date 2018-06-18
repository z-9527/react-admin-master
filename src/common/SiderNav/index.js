import React from 'react'
import {withRouter} from 'react-router-dom'
import CustomMenu from "../CustomMenu/index";

@withRouter
class SiderNav extends React.Component {
  state = {
    currentKey: '',
    selectedKeys: '',
    menus: [
      {
        title: '首页',
        icon: 'home',
        key: '/home'
      },
      {
        title: 'UI',
        icon: 'edit',
        key: '/home/ui',
        subs: [
          {key: '/home/ui/button', title: '按钮', icon: '',},
          {key: '/home/ui/icon', title: '图标', icon: '',},
          {key:'/home/ui/dropdown',title:'下拉菜单',icon:''},
          {key:'/home/ui/menu',title:'导航菜单',icon:''},
        ]
      },
      {
        title: '表格',
        icon: 'table',
        key: '/home/table',
        subs: [
        ]
      },
      {
        title: '表单',
        icon: 'form',
        key: '/form'
      },
      {
        title:'反馈',
        icon:'info-circle-o',
        key:'/home/feedback',
        subs:[
          {key: '/home/feedback/spin', title: '加载中', icon: '',},
          {key: '/home/feedback/modal', title: '对话框', icon: '',},
        ]
      }
    ]
  }

  componentDidMount() {
    //防止页面刷新出现问题
    const pathname = this.props.location.pathname
    this.setState({
      selectedKeys: pathname,
      currentKey: pathname.substr(0, pathname.lastIndexOf('/'))
    })
  }

  componentWillReceiveProps(nextProps) {
    //当点击面包屑导航时，侧边栏要同步响应
    const pathname = nextProps.location.pathname
    if (this.props.location.pathname !== pathname) {
      this.setState({
        selectedKeys: pathname,
        currentKey: pathname.substr(0, pathname.lastIndexOf('/'))
      })
    }
  }

  onlyKey = (a) => {
    //此函数的作用是一次只展开一个submenu
    this.setState({
      currentKey: a[a.length - 1]
    })
  }

  render() {
    return (
      <div>
        <div style={styles.logo}></div>
        <CustomMenu
          menus={this.state.menus}
          theme='dark'
          mode='inline'
          onOpenChange={this.onlyKey}
          openKeys={[this.state.currentKey]}   //一定是数组
          selectedKeys={[this.state.selectedKeys]}  //一定是数组
        />
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav